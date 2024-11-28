filteredRoomUsers.sort((a, b) => {
  const aRoomData = a.dataValues;
  const bRoomData = b.dataValues;

  const draftA = aRoomData.draft ? 1 : 0;
  const draftB = bRoomData.draft ? 1 : 0;

  const lastMessageTimeA = aRoomData.lastMessageSentTime
    ? new Date(aRoomData.lastMessageSentTime)
    : null;
  const lastMessageTimeB = bRoomData.lastMessageSentTime
    ? new Date(bRoomData.lastMessageSentTime)
    : null;

  if (draftA && !draftB) {
    return -1;
  } else if (draftB && !draftA) {
    return 1;
  } else {
    if (lastMessageTimeA && lastMessageTimeB) {
      return lastMessageTimeB - lastMessageTimeA;
    } else if (lastMessageTimeA) {
      return -1;
    } else if (lastMessageTimeB) {
      return 1;
    }
  }
  return 0;
});

