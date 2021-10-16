const newError = require('../utils/createErrorMessage');
const { BlogPost } = require('../models');
const { clientErrors } = require('../utils/httpStatusCodes');
const categoriesService = require('./categories');

const validateCategories = async (categoryIds) => {
    const categories = await categoriesService.getCategories();
    const ids = categories.map((cat) => cat.dataValues.id);
    const isValid = categoryIds.every((category) => ids.includes(category));
    return isValid;
};

const createPost = async (title, categoryIds, content, userId) => {
    const isValidCategories = await validateCategories(categoryIds);
    if (!isValidCategories) return newError('"categoryIds" not found', clientErrors.badRequest);
    const post = await BlogPost.create({ title, content, userId });
    const { id } = post;
    return { id, title, content, userId };
};

module.exports = { createPost };