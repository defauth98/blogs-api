const { Categories } = require('../models');
const httpStatus = require('../utils/httpStatus');

const create = async (req, res) => {
  const { name } = req.body;

  await Categories.create({ name })
    .then((newCategory) => res.status(httpStatus.HTTP_CREATE_STATUS).json(newCategory))
    .catch((err) => console.log(err));
};

const getAll = async (_req, res) => Categories.findAll(
  { attributes: ['id', 'name'] },
).then((allCategories) => res.status(httpStatus.HTTP_OK_STATUS).json(allCategories))
  .catch((error) => {
  console.log(error);
  res.status(httpStatus.HTTP_NOT_FOUND).json(error);
});

const findOne = async (id) => {
  const category = await Categories.findByPk(id);
  return category;
};

module.exports = {
  create,
  getAll,
  findOne,
};
