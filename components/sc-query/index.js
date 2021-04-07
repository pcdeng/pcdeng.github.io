const http = require('axios');
const fs = require('fs');

const { conf } = require('./table-columns-conf');

const images = [1, 2, 3, 4, 5, 6];

console.log('case1:', rotate(images, 0));
console.log('case2:', rotate(images, 1));
console.log('case3:', rotate(images, 2));
console.log('case4:', rotate(images, 3));
console.log('case5:', rotate(images, 4));
console.log('case6:', rotate(images, 5));

function rotate(images, index) {
  const virtualImages = [images.slice().pop()].concat(images, images);
  // console.log('virtualImages', virtualImages);
  return virtualImages.splice(index, 3);
}

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

function generateScQuery() {
  http
    .get('https://af-monitoring-spot-dev-ncus.azurewebsites.net/api/v1/query-request-schema')
    .then((r) => {
      const obj = r.data;
      const properties = obj.properties.query.properties;
      const o = {};

      for (let technology in properties) {
        o[technology] = {};
        const resources = properties[technology].properties;
        for (let resource in resources) {
          o[technology][resource] = {
            fields: getFields(resources[resource].properties.fields),
            filter: getFilters(resources[resource].properties.filter),
          };
        }
      }
      console.log('result:', o);
      fs.writeFile('./fields.json', JSON.stringify(o), {}, (err, dd) => {
        if (err) {
          console.log('err:', err);
          return;
        }
        console.log('write success');
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function getFields(fields) {
  const newFields = [];
  fields = fields.properties;
  for (let fieldKey in fields) {
    const enums = fields[fieldKey].items.enum;
    newFields.push(`${fieldKey}.${enums.join('.')}`);
  }
  return newFields;
}

function getFilters(filter) {
  const newFilters = [];
  filters = filter.properties;
  for (let filterKey in filters) {
    console.log(filters[filterKey]);
    const enums = filters[filterKey] && filter.items ? filters[filterKey].items.enum : [];
    newFilters.push(`${filterKey}${enums.legth > 0 ? '.' + enums.join('.') : ''}`);
  }
  return newFilters;
}
