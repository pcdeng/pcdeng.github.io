const _ = require('loadsh');

const result = require('./mock/tasks.json');
const roomsResult = require('./mock/rooms.json');
const dailyRoomsResult = require('./mock/daily-rooms.json');

const tasks = result.result;
const rooms = roomsResult.result;
const dailyRooms = dailyRoomsResult.result;

const assignLocations = dailyRooms.assignLocations;

const assignedRooms = [];
assignLocations.forEach((z) => {
  z.assignLocations.forEach((l) => {
    if (l.isAssigned) {
      assignedRooms.push(l.name);
    }
  });
});

console.log('assigned rooms ', assignedRooms.length);

let cleanRoomTasks = tasks.filter((t) => [1, 6].includes(t.taskType));
let cleanRooms = rooms.filter((r) => r.type === 1);

cleanRooms = cleanRooms.filter((r) => {
  const task = cleanRoomTasks.find((t) => t.locationId === r.id);
  return task;
});

let cleanRoomNames = cleanRooms.map((r) => `${r.name}`);

const a = _.xor(assignedRooms, cleanRoomNames);
console.log(a);
