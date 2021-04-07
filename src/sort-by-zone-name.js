const _ = require('loadsh');

let zoneNames = [
  '15B',
  '7C',
  '11D',
  '14D',
  '18B',
  '14A',
  '12C',
  '8C',
  '16B',
  '16C',
  '17B',
  '17D',
  '14C',
  '21C',
  '20D',
  '10C',
  '17A',
  '9A',
  '10B',
  '21A',
  '19C',
  '12D',
  '9D',
  '15A',
  '11A',
  '18A',
  '14B',
  '20B',
  '10A',
  '18D',
  '7A',
  '15C',
  '9B',
  '11B',
  '19A',
  '16A',
  '11C',
  '16D',
  '19D',
  '7B',
  '20C',
  '21B',
  '10D',
  '18C',
  '12A',
  '19B',
  '8B',
  '20A',
  '8D',
  '17C',
  '15D',
  '8A',
  '7D',
  '9C',
  '12B',
];
zoneNames = _.shuffle(zoneNames);
console.log('before sort:', zoneNames);

const sortedZoneNames = _.sortBy(
  zoneNames,
  function (floor) {
    const name = floor || '';
    return parseInt(name, 10);
  },
  function (floor) {
    let name = floor || '';
    name = name.replace(/[0-9]/g, '');
    return name;
  },
);

console.log('after sort:', sortedZoneNames);
