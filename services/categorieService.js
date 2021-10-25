const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.findOne({ where: { name } });

  if (category) return { code: 404, message: 'Categorie already registered' };

  const { dataValues } = await Categories.create({ name });

  return dataValues;
};

const getAllCategorie = async () => {
  const allCategories = await Categories.findAll();

  return allCategories;
};

module.exports = { createCategory, getAllCategorie };