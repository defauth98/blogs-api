const jwt = require('jsonwebtoken');
const { User } = require('../models');
const errorMessage = require('../utils/errorMessages');

const secret = process.env.JWT_SECRET;

const verifyIfEmailAlreadyExists = async (email) => {
  const checkEmail = await User.findOne({ where: { email } });
  return checkEmail;
};

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, secret);
  return { token };
};

module.exports = async (body) => {
  const { email } = body;
  const emailChecked = await verifyIfEmailAlreadyExists(email);
  if (emailChecked) throw errorMessage.EMAIL_ALREADY_EXISTS;
  User.create(body);
  const token = generateToken(body);
  return token;
};