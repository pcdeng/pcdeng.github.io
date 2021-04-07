var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'test',
  timezone: '+9:00',
  dateStrings: true,
  debug: false,
});

connection.connect();

connection.query('INSERT INTO haha (`created_at`) VALUES(NOW())', function (error, results, fields) {
  if (error) throw error;
  console.log('The time is: ', results);
});

// connection.query('SELECT NOW()', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The time is: ', results);
// });
