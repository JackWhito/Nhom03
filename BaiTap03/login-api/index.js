const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, result) => {
    if (err) return res.status(500).send('Error registering user');
    res.status(201).send('User registered successfully');
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).send('Error on the server');
    if (results.length === 0) return res.status(404).send('No user found');

    const user = results[0];
    if (password !== user.password) return res.status(401).send({ auth: false, token: null });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({ auth: true, token });
  });
});


function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
  
      req.userId = decoded.id;
      next();
    });
  }

app.get('/me', verifyToken, (req, res) => {
  const query = 'SELECT email FROM users WHERE id = ?';
  db.query(query, [req.userId], (err, results) => {
    if (err) return res.status(500).send('Error on the server');
    if (results.length === 0) return res.status(404).send('No user found');

    res.status(200).send(results[0]);
  });
});
