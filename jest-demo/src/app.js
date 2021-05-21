const sum = require('./sum');
const ev = require('./ev');

ev.on('ready', (data) => {
    console.log('data is:', data);
});

const result = sum(1, 2);
console.log(result);