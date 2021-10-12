const { User } = require('../models');
const { createToken } = require('../auth/tokenCreation');
const { error9, error12 } = require('../utils/errors');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = { email, password };

  const token = createToken(user);

  User.create({ displayName, email, password, image })
    .then(() => {
      res.status(201).json(token);
    })
    .catch(() => {
      res.status(409).json({ message: 'User already registered' });
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };

  const token = createToken(user);

  const findUser = await User.findOne({ where: { email } });
  
  if (findUser === null) {
    return res.status(error9.error.status).json({ message: error9.error.message }); 
  }

  res.status(200).json(token);
};

const getUsers = async (_req, res) => {
  User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Deu ruim' });
    });
};
const getUser = async (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      const { id, displayName, email, image } = user;
      res.status(200).json({ id, displayName, email, image });
    })
    .catch(() => {
      res.status(error12.error.status).json({ message: error12.error.message });
    });
};
 
module.exports = {
  create,
  login,
  getUsers,
  getUser,
};