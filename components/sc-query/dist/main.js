"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('axios');
const fs = require('fs');
const databases_columns_conf_1 = require("./confs/databases-columns-conf");
generateScQueryInterface('CompareBys', databases_columns_conf_1.DATABASES_COLUMNS_CONF);
function generateScQueryInterface(className, conf) {
    console.log('conf', typeof conf.columns);
    const columns = conf.columns;
    const properties = [];
    columns.forEach(column => {
        if (column.name && column.compareBy) {
            const str = `${column.name}: ${column.isNumber ? 'number' : 'string'};`;
            properties.push(str);
        }
    });
    const c = `export class ${className} {
    ${properties.join('\n    ')}
  }`;
    fs.writeFile(`${className}.ts`, c, (err, data) => {
        if (err)
            throw err;
        console.log('c is:', data);
    });
}
function generateScQuery() {
    http.get('https://af-monitoring-spot-dev-ncus.azurewebsites.net/api/v1/query-request-schema').then(r => {
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
    }).catch(err => {
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
    const filters = filter.properties;
    for (let filterKey in filters) {
        console.log(filters[filterKey]);
        const enums = filters[filterKey] && filter.items ? filters[filterKey].items.enum : [];
        newFilters.push(`${filterKey}${enums.legth > 0 ? '.' + enums.join('.') : ''}`);
    }
    return newFilters;
}
//# sourceMappingURL=main.js.map