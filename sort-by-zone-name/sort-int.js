const _ = require('loadsh');
const before = _.shuffle([-999, 8, 4, 999, 1, 3, 5]);

console.log('before ', before.join(', '));

const after = _.sortBy(before, function (num) {
    return -num;
});

console.log('after ', after.join(', '));