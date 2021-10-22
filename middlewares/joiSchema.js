const Joi = require('joi');

const User = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().required().length(6),
    image: Joi.string(),
});

const Login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().length(6),
});

const Categories = Joi.object({
    name: Joi.string().required(),
});

module.exports = { User, Login, Categories };