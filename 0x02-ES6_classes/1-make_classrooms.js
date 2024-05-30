// Script to create a function that returns 3 CLassRoom instances

import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  // returns 3 ClassRoom instances
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}
