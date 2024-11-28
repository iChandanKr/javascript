// this method handle all the conditions
const emitEvent = (io, socketIdArray, roomIdOrThreadId, eventName, data) => {
  socketIdArray.forEach((socketObj) => {
    if (
      socketObj.roomId === roomIdOrThreadId ||
      socketObj.threadRoomId === roomIdOrThreadId
    ) {
      io.to(socketObj.socketId).emit(eventName, data);
    }
  });
};

getReaction = async (io, data) => {
  const { threadId, roomId, to, from } = data.head;
  const senderSocketIds = await client.get(
    threadId ? `threadRoom:${from}` : `userId:${from}`
  );
  const receiverSocketIds = await client.get(
    threadId ? `threadRoom:${to}` : `userId:${to}`
  );
  if (senderSocketIds) {
    const prasedSenderSocketIds = JSON.parse(senderSocketIds);
    emitEvent(
      io,
      prasedSenderSocketIds,
      threadId || roomId,
      threadId ? "react-thread-message" : "react-message",
      data
    );
  }
  if (receiverSocketIds && to !== from) {
    const parsedReceiverSocketIds = JSON.parse(receiverSocketIds);
    emitEvent(
      io,
      parsedReceiverSocketIds,
      threadId || roomId,
      threadId ? "react-thread-message" : "react-message",
      data
    );
  }
};
