const { Users, BlogPosts, Categories, PostsCategories } = require('../models');
// const userSchema = require('../schema/userSchema');

const HTTP_BAD_STATUS = 400;
// const HTTP_CONFLICT_STATUS = 409;
const HTTP_NOT_FOUND_STATUS = 404;

const checkCategories = async (categoryIds) => {
  const categories = await Categories.findAll();
  let categoryExist = null;
  
  categoryIds.forEach((receivedCategory) => {
    const exists = categories.find((existCategory) => existCategory.id === receivedCategory);
      categoryExist = exists;
  });

  if (!categoryExist) return ({ code: HTTP_BAD_STATUS, message: '"categoryIds" not found' });
  return null;
};

const insert = async (category) => {
  const { title, userId, content, categoryIds } = category;

  if (!title) return ({ code: HTTP_BAD_STATUS, message: '"title" is required' });
  if (!content) return ({ code: HTTP_BAD_STATUS, message: '"content" is required' });
  if (!categoryIds) return ({ code: HTTP_BAD_STATUS, message: '"categoryIds" is required' });

  const categoriesExists = await checkCategories(categoryIds);
  if (categoriesExists) return (categoriesExists);

  const newPost = await BlogPosts.create({ title, userId, content });
  const { dataValues } = newPost;

  categoryIds.forEach(async (usedCategory) => {
    await PostsCategories.create({ postId: dataValues.id, categoryId: usedCategory });
  });

  return dataValues;
};

const findAll = async () => {
  const posts = await BlogPosts.findAll({
    include: [{ model: Users, as: 'user' }, { model: Categories, as: 'categories' }],
  });

  return posts;
};

const findByID = async (receivedId) => {
  const post = await BlogPosts.findOne({
    where: { id: receivedId },
    include: [{ model: Users, as: 'user' }, { model: Categories, as: 'categories' }],
  });

  if (!post) return ({ code: HTTP_NOT_FOUND_STATUS, message: 'Post does not exist' });

  return post;
};

module.exports = {
  insert,
  findAll,
  findByID,
};
