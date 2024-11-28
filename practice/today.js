const emitPresence = async (socketEvent, data) => {
  const usersToNotify = await this.presenceService.getUsersFromDmList(
    this.socket.userId
  );

  for (const user of usersToNotify) {
    const socketIds = await client.get(`userId:${user}`);
    if (socketIds) {
      const parsedSocketIds = JSON.parse(socketIds);

      for (const sockets of parsedSocketIds) {
        this.io.to(sockets.socketId).emit(socketEvent, data);
      }
    }
  }
};
 