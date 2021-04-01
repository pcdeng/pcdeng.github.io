const metricFile = 'tempdb-metric';
const queryResponseFile = 'tempdb-query-fields';

const metricConfig = require(`./${metricFile}`);
const columns = metricConfig.columns.map(column => column.name);
const query = require(`./${queryResponseFile}`);
const fieldKeys = Object.keys(query.query.sqlServer.session.fields);

const combinedArray = columns.concat(fieldKeys);

const difference = combinedArray.filter(field => {
    return !columns.includes(field) || !fieldKeys.includes(field);
});

console.log(`columns count:${columns.length}, fields count: ${fieldKeys.length}`);

console.log(`difference: ${difference.join(',')}`);
