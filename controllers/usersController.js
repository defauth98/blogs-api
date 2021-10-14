const { User } = require('../models');
const { createToken } = require('../middlewares/createJWT');
const errorMessages = require('../utils/errorMessages');
const httpStatus = require('../utils/httpStatus');

const createUser = (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };

  const token = createToken(user);

  User.create({ displayName, email, password, image })
  .then(() => {
    res.status(httpStatus.created).json(token);
  })
  .catch(() => {
    res.status(httpStatus.conflict).json({ message: errorMessages.userExists });
  });
};

const getAllUsers = async (_req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
};

module.exports = {
  createUser,
  getAllUsers,
};
