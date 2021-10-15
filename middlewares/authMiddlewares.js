require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET } = process.env;

const authValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const { email } = jwt.verify(token, SECRET);
    const user = await User.findOne({ where: { email } });
    req.user = user;
    next();
  } catch (_e) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authValidation,
};