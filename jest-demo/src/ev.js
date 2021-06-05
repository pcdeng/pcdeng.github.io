const EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(() => {
  module.exports.emit('ready', { name: 'Payton' });
}, 1000);
