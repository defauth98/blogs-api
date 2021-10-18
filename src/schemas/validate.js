const { body } = require('express-validator');
const errors = require('../utils/errors');

module.exports = {
  createUser: () => [
    body('displayName')
      .isLength({ min: 8 })
      .withMessage(errors.invalidNameLength),
    body('email')
      .exists()
      .withMessage(errors.nullField('email'))
      .isEmail()
      .withMessage(errors.emailInvalidFormat),
    body('password')
      .exists()
      .withMessage(errors.nullField('password'))
      .isLength({ min: 6 })
      .withMessage(errors.invalidPasswordLength),
  ],
  login: () => [
    body('email')
      .exists()
      .withMessage(errors.nullField('email'))
      .notEmpty()
      .withMessage(errors.emptyField('email')),
    body('password')
      .exists()
      .withMessage(errors.nullField('password'))
      .notEmpty()
      .withMessage(errors.emptyField('password')),
  ],
};
