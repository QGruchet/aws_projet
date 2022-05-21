const gameService = require('../services/game.service');
const userService = require('../services/user.service');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`[/game] - User ${socket.id} connected`);
    gameService.connect(socket.id);

    socket.on('disconnect', () => {
      console.log(`[/game] - User ${socket.id} disconnected`);
      const lobby = gameService.disconnect(socket.id);
    });

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
    });

    socket.on('message', (data) => {
      console.log(`[/game] - message`);
      console.log(`[/game] - ${data.userId}: ${data.content}`);
      socket.emit('message', data.content);
    });

    socket.on('ping', () => {
      console.log(`[/game] - ping`);
      socket.emit('pong');
    });
  });
};
