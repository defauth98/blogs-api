const { Router } = require('express');
const { Post } = require('../controllers');
const { authMiddleware, validatePostData } = require('../middlewares');

const router = Router();

router
  .post('/', authMiddleware, validatePostData, Post.create);
  // .get('/', authMiddleware, Post.getAll);

module.exports = router;