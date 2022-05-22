const jwt = require('jsonwebtoken');
const gameService = require('../services/game.service');
const userService = require('../services/user.service');

let clients = new Map();

module.exports = (io) => {
  io.use(function(socket, next) {
    const token = socket.handshake.query.token;
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        socket.disconnect();
        return ;
      }
      const userId = decoded.id;
      clients.set(socket.id, userId);
      next();
    });
  }).on('connection', (socket) => {
    socket.on('disconnect', (reason) => {
      clients.delete(socket.id);
    });

    socket.on('message', async (content) => {
      const userId = clients.get(socket.id);
      const user = await userService.findById(userId);
      if (!user)
        return ;
      io.emit('message', { author: user.username, content: content });
    });
/*
    socket.on('create', (userId) => {
      console.log(`[/game] - ${userId}: create`);
      const user = userService.find(userId);
      if (!user) {
        socket.emit('error', 'User not found');
        return ;
      }
      const lobby = gameService.createLobby(user);
      socket.emit('created', lobby);
    });

    socket.on('play', (userId) => {
      console.log(`[/game] - ${userId}: play`);
      const user = userService.find(userId);
      if (!user) {
        socket.emit('error', 'User not found');
        return ;
      }
      const lobby = gameService.assign(userId);
      if (!lobby) {
        socket.emit('error', 'Already in a lobby');
        return ;
      }
      socket.join(lobby.id);
      socket.to(lobby.id).emit('join', lobby.find(userId));
    });

    socket.on('start', (data) => {
      console.log(`[/game] - ${data.userId}: start`);
    });*/
  });
};
