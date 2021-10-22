const { postServices } = require('../services');
const { status } = require('../messages');

const createPost = async (req, res) => {
  const post = req.body;
  const userId = req.user.id; 
  const create = await postServices.createPost(post, userId);
  return res.status(status.created).json(create);
};

const getPosts = async (_req, res) => {
  const getAll = await postServices.getPosts();
  return res.status(status.OK).json(getAll);
};

const getPost = async (req, res) => {
  const { id } = req.params; 
  const getOne = await postServices.getPost(id);
  return res.status(status.OK).json(getOne);
};

const updatePost = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const userId = req.user.id;

  const update = await postServices.updatePost(data, id, userId);
  return res.status(status.OK).json(update);
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
};
