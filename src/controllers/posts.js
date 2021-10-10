const Posts = require('../services/posts');

const create = async (req, res) => {
  const { status, data, message } = await Posts.create(req.body, req.user);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await Posts.getAll();

  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Posts.getById(id);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Posts.update(id, req.body, req.user);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await Posts.remove(id, req.user);
  if (message) return res.status(status).json({ message });

  res.status(status).send();
};

const getQueryParams = async (req, res) => {
  const { q } = req.query;
  const { status, data, message } = await Posts.getQueryParams(q);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  getQueryParams,
};