module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`[/date] - User ${socket.id} connected`);
    socket.on('disconnect', () => {
      console.log(`[/date] - User ${socket.id} disconnected`);
    });
    setInterval(() => {
      io.emit('FromAPI', new Date());
    }, 1000);
  });
};
