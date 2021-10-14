const errorMessages = require('../utils/errorMessages');
const httpStatus = require('../utils/httpStatus');
const { User } = require('../models');

const nameValidate = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8 || typeof displayName !== 'string') {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.nameLength });
  }

  next();
};

const emailValidate = async (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;

  if (!email) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.noEmail });
  }

  if (regexEmail.test(email) === false) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.invalidEmail });
  }

  const emailExists = await User.findOne({ where: { email } });
  if (emailExists !== null) {
    return res.status(httpStatus.conflict).json({ message: errorMessages.userExists });
  }

  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.noPassword });
  }

  if (password.length !== 6) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.passwordLength });
  }

  next();
};

module.exports = {
  nameValidate,
  emailValidate,
  passwordValidate,
};
