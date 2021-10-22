const express = require('express');
const rescue = require('express-rescue');
const { postControllers } = require('../controllers');
const { middlewaresPost } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresPost.validatePost, rescue(postControllers.createPost));
router.get('/', middlewaresPost.validateToken, rescue(postControllers.getPosts));
router.get('/:id', rescue(postControllers.getPost));

module.exports = router;