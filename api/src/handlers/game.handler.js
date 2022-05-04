module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`[/game] - User ${socket.id} connected`);
    socket.on('disconnect', () => {
      console.log(`[/game] - User ${socket.id} disconnected`);
    });
    socket.on('chat message', (msg) => {
      console.log('message received:', msg);
      io.emit('chat message', msg);
    });
  });
};
