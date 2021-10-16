const { Op } = require('sequelize');
const { Category, BlogPost, User } = require('../models');
const { ERROR_CATEGORY_NOT_FOUND } = require('../utils/msg');

const categoryExist = async (categoryIds) => {
  const ifExist = await User.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (ifExist.length === categoryIds.length) return true;
  return false;
};

const createPost = async (addPost, userId = 1) => {
  const { title, content, categoryIds } = addPost;
  const ifExist = await categoryExist(categoryIds);
  // console.log(ifExist);
  if (!ifExist) throw ERROR_CATEGORY_NOT_FOUND;

  await BlogPost.create({ title, content, userId });
  const post = await BlogPost.findOne({ where: { title, content, userId } });
  return post;
};

// Op: https://sequelize.org/master/manual/model-querying-basics.html#operators

const getPosts = async () => {
  const blogPosts = await 
  BlogPost.findAll({ include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories' },
  ] });
  return blogPosts;
};

module.exports = { createPost, getPosts };