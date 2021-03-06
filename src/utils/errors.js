const errors = {
  requiredError: (field) => `"${field}" is required`,
  lengthError: (field, lengthSize) =>
    `"${field}" length must be at least ${lengthSize} characters long`,
  passwordLengthError: (field, lengthSize) =>
    `"${field}" length must be ${lengthSize} characters long`,
  validEmail: () => '"email" must be a valid email',
  emptyFieldError: (field) => `"${field}" is not allowed to be empty`,
  loginError: 'Invalid fields',
  userNotExistError: 'User does not exist',
  postNotExistError: 'Post does not exist',
  userAlreadyExistError: 'User already registered',
};

module.exports = errors;
