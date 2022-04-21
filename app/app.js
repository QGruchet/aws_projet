/*const http = require('http');
const express = require('express');
const path = require('path');

// Application configuration
const app = express();
const server = http.createServer();
const io = require('socket.io')(server);
const port = process.env.PORT;
app.use(express.static(path.join(__dirname, 'public')));

// Routes configuration
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var gameRouter = require('./routes/game');
app.use('/game', gameRouter);

// Start listening to requests
server.on('listening', () => {
  console.log('Listening on port ' + port)
});

server.listen(port);

io.sockets.on('connection', (socket) => {
  console.log('Client connected: ' + socket.id)
  socket.on('draw', (data) => socket.broadcast.emit('draw', data))
  socket.on('disconnect', () => console.log('Client disconnected'))
})

module.exports = app;*/

const express = require('express');
const path = require('path');

// Application configuration
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT;
app.use(express.static(path.join(__dirname, 'public')));

// Routes configuration
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var gameRouter = require('./routes/game');
app.use('/game', gameRouter);

//fonctions socket du tchat
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



// Start listening to requests
server.on('listening', () => {
  console.log('Listening on port ' + port)
});

server.listen(port);

io.sockets.on('connection', (socket) => {
  console.log('Client connected: ' + socket.id)
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