const emitReaction = async (
  key,
  identifier,
  io,
  data,
  identifierKey,
  eventName
) => {
  const socketIds = await client.get(key);
  if (socketIds) {
    const socketArray = JSON.parse(socketIds);
    socketArray.forEach((socketObj) => {
      if (socketObj[identifierKey] === identifier) {
        io.to(socketObj.socketId).emit(eventName, data);
      }
    });
  }
};

const getReaction = async (io, data) => {
  const { threadId, roomId, to, from } = data.head;

  if (threadId) {
    await emitReaction(
      `threadRoom:${from}`,
      threadId,
      io,
      data,
      "threadRoomId",
      "react-thread-message"
    );
    if (to !== from) {
      await emitReaction(
        `threadRoom:${to}`,
        threadId,
        io,
        data,
        "threadRoomId",
        "react-thread-message"
      );
    }
  } else {
    await emitReaction(
      `userId:${from}`,
      roomId,
      io,
      data,
      "roomId",
      "react-message"
    );
    if (to !== from) {
      await emitReaction(
        `userId:${to}`,
        roomId,
        io,
        data,
        "roomId",
        "react-message"
      );
    }
  }
};
