const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'izukaken123',
    database: 'baitap02'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const otp = crypto.randomBytes(3).toString('hex');
    const otpExpiry = new Date(Date.now() + 10 * 60000); // 10 minutes from now

    const query = 'INSERT INTO users (email, password, otp, otp_expiry) VALUES (?, ?, ?, ?)';
    db.query(query, [email, password, otp, otpExpiry], (err, result) => {
        if (err) throw err;
        res.json({ message: 'OTP generated', otp });
    });
});

app.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND otp = ? AND otp_expiry > NOW()';
    db.query(query, [email, otp], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send('OTP verified successfully');
        } else {
            res.send('Invalid or expired OTP');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
