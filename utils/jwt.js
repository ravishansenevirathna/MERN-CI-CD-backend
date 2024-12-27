const jwt = require('jsonwebtoken');

const JWT_SECRET = 'qwe23#$456gdfhfbhgtjs';
const JWT_EXPIRY = '1d';

exports.JWT_SECRET = JWT_SECRET;

exports.generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};


exports.decodeToken = (token) => {
  return jwt.decode(token);
};