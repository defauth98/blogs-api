const Joi = require('joi');

const userValidation = Joi.object({
displayName: Joi.string().required().min(8),
email: Joi.string().email().required(),
password: Joi.string().required().length(6),
image: Joi.string(),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const categoriesValidation = Joi.object({
  name: Joi.string().required(),
});

const postValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

module.exports = {
  userValidation,
  loginValidation,
  categoriesValidation,
  postValidation,
};
