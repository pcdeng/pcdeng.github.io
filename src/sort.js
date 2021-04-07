const rooms = [
  '-104324324324324324444444444444444444444441',
  '-201',
  '30144234324237894329874937298749329432',
  '401',
  '5010403240320403204324',
];
console.log('before sort', rooms);

/**
 * 从大到小
 */
rooms.sort((a, b) => {
  console.log(a, b, rooms);
  return b - a; // 小于 0，a 在 b 之前，
});
console.log('sorted:', rooms);
