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

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

//forgot-password
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const otp = crypto.randomBytes(3).toString('hex');
    const otpExpiry = new Date(Date.now() + 10 * 60000); // OTP valid for 10 minutes

    const query = 'UPDATE users SET otp = ?, otp_expiry = ? WHERE email = ?';
    db.query(query, [otp, otpExpiry, email], (err, result) => {
        if (err) throw err;
        console.log(`OTP for ${email}: ${otp}`);
        res.json({ message: 'OTP sent', otp: otp });
    });
});


//verify otp
app.post('/verify-otp', (req, res) => {
    const { email, otp, newPassword } = req.body;

    const query = 'SELECT otp, otp_expiry FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(400).send('Email not found');
        }

        const { otp: storedOtp, otp_expiry: otpExpiry } = results[0];
        if (storedOtp !== otp || new Date() > otpExpiry) {
            return res.status(400).send('Invalid or expired OTP');
        }

        const updateQuery = 'UPDATE users SET password = ?, otp = NULL, otp_expiry = NULL WHERE email = ?';
        db.query(updateQuery, [newPassword, email], (err, result) => {
            if (err) throw err;
            res.send('Password updated successfully');
        });
    });
});

