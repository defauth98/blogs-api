const joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const util = require('../util');

const validateUser = joi.object({
  displayName: joi.string().min(8),
  email: joi.string().email().required(),
  password: joi.string().length(6).required(),
});

const jwtSecret = 'passwordNivelHard';

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = validateUser.validate({ displayName, email, password });

  if (error) {
    const { message } = error.details[0];
    throw util(message, 400);
  }

  const findEmail = await User.findAll({ where: { email } });

  if (findEmail.length > 0) {
    throw util('User already registered', 409);
  }

  await User.create({ displayName, email, password, image });

  const [findUser] = await User.findAll({ where: { email } });


  const token = jwt.sign(findUser.dataValues, jwtSecret);

  return token;
};

const login = async (user) => {
  const { email, password } = user;
  console.log(email);
  const { error } = validateUser.validate({ email, password });

  if (error) {
    const { message } = error.details[0];
    throw util(message, 400);
  }

  const findUser = await User.findAll({ where: { email, password } });

  if (findUser.length === 0) throw util('Invalid fields', 400);

  const token = jwt.sign(user, jwtSecret, {
    expiresIn: '1d', algorithm: 'HS256',
  });

  return token;
};

const getAll = async (token) => {
  if (!token) throw util('Token not found', 401);

  try {
    jwt.verify(token, jwtSecret);
  } catch (_err) {
    throw util('Expired or invalid token', 401);
  }

  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const findId = async (token, id) => {
  if (!token) throw util('Token not found', 401);

  try {
    jwt.verify(token, jwtSecret);
  } catch (_err) {
    throw util('Expired or invalid token', 401);
  }

  const users = await User.findByPk(id);

  if (!users) throw util('User does not exist', 404);

  return users;
};

module.exports = {
  createUser,
  login,
  getAll,
  findId,
};
