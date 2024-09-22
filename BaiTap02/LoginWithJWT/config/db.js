const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
  host: 'localhost',
    user: 'admin',
    password: 'izukaken123',
    database: 'baitap02'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;
