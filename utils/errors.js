const ERROR_DISPLAY_NAME_LENGTH = {
  error: {
    status: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
};

const ERROR_VALID_EMAIL = {
  error: {
    status: 400,
    message: '"email" must be a valid email',
  },
};

const ERROR_EMAIL_REQUIRED = {
  error: {
    status: 400,
    message: '"email" is required',
  },
};

const ERROR_PASSWORD_LENGTH = {
  error: {
    status: 400,
    message: '"password" length must be 6 characters long',
  },
};

const ERROR_PASSWORD_REQUIRED = {
  error: {
    status: 400,
    message: '"password" is required',
  },
};

const ERROR_USER_EXISTS = {
  error: {
    status: 409,
    message: 'User already registered',
  },
};

const ERROR_USER_NOT_FOUND = {
  error: {
    status: 404,
    message: 'User does not exist',
  },
};

const ERROR_EMPTY_EMAIL = {
  error: {
    status: 400,
    message: '"email" is not allowed to be empty', 
  },
};

const ERROR_EMPTY_PASSWORD = {
  error: {
    status: 400,
    message: '"password" is not allowed to be empty', 
  },
};

const ERROR_INVALID_FIELDS = {
  error: {
    status: 400,
    message: 'Invalid fields', 
  },
};

const ERROR_JWT = { 
  error: { 
    status: 401, 
    message: 'Expired or invalid token',
  },
};

const ERROR_TOKEN = { 
  error: { 
    status: 401, 
    message: 'Token not found',
  },
};

const ERROR_CATEGORY_NAME = {
  error: {
    status: 400,
    message: '"name" is required',
  },
};

const ERROR_CATEGORY_NOT_FOUND = {
  error: {
    status: 400,
    message: '"categoryIDs" not found',
  },
};

module.exports = {
  ERROR_DISPLAY_NAME_LENGTH,
  ERROR_EMAIL_REQUIRED,
  ERROR_EMPTY_EMAIL,
  ERROR_EMPTY_PASSWORD,
  ERROR_INVALID_FIELDS,
  ERROR_PASSWORD_LENGTH,
  ERROR_PASSWORD_REQUIRED,
  ERROR_USER_EXISTS,
  ERROR_VALID_EMAIL,
  ERROR_TOKEN,
  ERROR_JWT,
  ERROR_USER_NOT_FOUND,
  ERROR_CATEGORY_NAME,
  ERROR_CATEGORY_NOT_FOUND,
};