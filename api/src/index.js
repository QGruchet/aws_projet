const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const pgp = require('pg-promise')();

// Application configuration
const app = express();
const server = require('http').createServer(app)
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database configuration
const db = pgp({
  host: 'db',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  max: 32 // max size of the connection pool
});

// Routes configuration
app.use('/user', require('./routes/user.route'));

// Gateways configuration
const io = require('socket.io')(server, { cors: { origin:`http://localhost:${port}` } });
require('./handlers/date.handler')(io.of('/date'));
require('./handlers/game.handler')(io.of('/game'));
require('./handlers/user.handler')(io.of('/user'));

// TODO: Remove this route
app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start listening to requests
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

/*
// GAME GATEWAY
const gameNamespace = io.of('/game');

gameNamespace.on('connection', (socket) => {
  console.log('Client connected - /game: ' + socket.id)
  socket.on('draw', (data) => socket.broadcast.emit('draw', data))
  socket.on('pencil', (data) => socket.broadcast.emit('pencil', data))
  socket.on('rubber', (data) => socket.broadcast.emit('rubber', data))
  socket.on('color', (color) => socket.broadcast.emit('color', color))
  socket.on('lineWidth', (data) => socket.broadcast.emit('lineWidth', data))
  socket.on('opacity', (data) => socket.broadcast.emit('opacity', data))
  socket.on('clear', () => socket.broadcast.emit('clear'))
  socket.on('fill', (color) => socket.broadcast.emit('fill', color))
  socket.on('undo', (points) => socket.broadcast.emit('undo', points))
  socket.on('disconnect', () => console.log('Client disconnected'))
})
*/
