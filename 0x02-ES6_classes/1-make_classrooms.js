/** Import ClassRooms from classroom.js */
import ClassRoom from './0-classroom';

/** Implement a function named initializeRooms */
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
