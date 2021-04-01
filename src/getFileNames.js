const fs = require('fs');
const path = require('path');

let fileNames = fs.readdirSync('./');

fileNames = fileNames.filter(fileName => !/\.spec\.ts$/.test(fileName));

fileNames = fileNames.map(item => `export * from './${item}'`).join(';\n');
console.log(fileNames);
