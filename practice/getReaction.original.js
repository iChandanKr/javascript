getReaction = async (io, data) => {
  const { threadId, roomId, to, from } = data.head;
  if (threadId) {
    const senderThreadSocketIds = await client.get(`threadRoom:${from}`);
    const receiverThreadSocketIds = await client.get(`threadRoom:${to}`);
    if (senderThreadSocketIds) {
      // If socketId array exists, parse it to get the array of objects
      const socketThreadIdArray = JSON.parse(senderThreadSocketIds);
      socketThreadIdArray.forEach((socketObj) => {
        if (socketObj.threadRoomId === threadId) {
          io.to(socketObj.socketId).emit("react-thread-message", data);
        }
      });
    }
    if (receiverThreadSocketIds && to !== from) {
      const socketThreadIdArray = JSON.parse(receiverThreadSocketIds);
      socketThreadIdArray.forEach((socketObj) => {
        if (socketObj.threadRoomId === threadId) {
          io.to(socketObj.socketId).emit("react-thread-message", data);
        }
      });
    }
  } else {
    const receiverSocketIds = await client.get(`userId:${to}`);
    const userSocketIds = await client.get(`userId:${from}`);
    if (userSocketIds) {
      // If socketId array exists, parse it to get the array of objects
      const socketIdArray = JSON.parse(userSocketIds);
      socketIdArray.forEach((socketObj) => {
        if (socketObj.roomId === roomId) {
          io.to(socketObj.socketId).emit("react-message", data);
        }
      });
    }
    if (receiverSocketIds && to !== from) {
      const socketIdArray = JSON.parse(receiverSocketIds);
      socketIdArray.forEach((socketObj) => {
        if (socketObj.roomId === roomId) {
          io.to(socketObj.socketId).emit("react-message", data);
        }
      });
    }
  }
};
