const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ji31826832',
  database: 'secure',
  insecureAuth : true
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = {connection}