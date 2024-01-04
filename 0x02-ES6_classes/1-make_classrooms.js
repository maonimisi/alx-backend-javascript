import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const new_array = [];
  new_array.push(new ClassRoom(19));
  new_array.push(new ClassRoom(20));
  new_array.push(new ClassRoom(34));

  return new_array;
}
