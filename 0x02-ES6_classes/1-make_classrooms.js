import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const newArray = [];
  newArray.push(new ClassRoom(19));
  newArray.push(new ClassRoom(20));
  newArray.push(new ClassRoom(34));

  return newArray;
}
