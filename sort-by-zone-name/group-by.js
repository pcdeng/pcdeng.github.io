const _ = require('loadsh');

const data = require('./zones.json');
const before = data;

console.log('before ', data.result);

const after = _.groupBy(data.result, 'parentId');

console.log('after ', after);
