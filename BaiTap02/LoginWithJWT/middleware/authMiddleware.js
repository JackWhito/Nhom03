const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(403).json({ message: 'Không có token, truy cập bị từ chối' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token không hợp lệ' });
  }
};
