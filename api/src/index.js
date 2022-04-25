const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const pgp = require('pg-promise')();

// Application configuration
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
app.use(cors());
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
app.get('/', (req, res) => {
  res.send(`Welcome to ${process.env.npm_package_name}!`)
});

// Start listening to requests
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// USERS SERVICE
var users = [];

function findUser(userId) {
  if (userId < 0)
    throw new Error("Not found");
  return [userId];
}

function askFriend(fromId, toId) {
  /* ... */
}

// USERS GATEWAY
const userNamespace = io.of('/user');

userNamespace.on('connection', (socket) => {
  console.log('Client connected - /user: ' + socket.id)
})

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

module.exports = app;
