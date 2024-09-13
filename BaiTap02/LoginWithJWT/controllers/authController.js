const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const dotenv = require('dotenv');
dotenv.config();

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email và mật khẩu không được để trống' });
  }

  const query = 'SELECT * FROM users WHERE email = ?';

  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi server', error: err });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email không tồn tại' });
    }

    const user = results[0];

    // Kiểm tra mật khẩu
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Mật khẩu không chính xác' });
    }

    // Tạo JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Đăng nhập thành công', token });
  });
};
