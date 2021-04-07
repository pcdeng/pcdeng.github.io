import * as fs from 'fs';

// generateScQuery();

// generateScQueryInterface('ServerDatabase', conf);

function generateScQueryInterface(className, conf) {
  console.log('conf', typeof conf.columns);
  const columns = conf.columns;
  const properties = [];
  columns.forEach((column) => {
    if (column.name) {
      const str = `${column.name}: ${column.isNumber ? 'number' : 'string'};`;
      properties.push(str);
    }
  });

  const c = `export class ${className} {
    ${properties.join('\n    ')}
  }`;

  fs.writeFile(`${className}.ts`, c, (err, data) => {
    if (err) throw err;
    console.log('c is:', data);
  });
}
