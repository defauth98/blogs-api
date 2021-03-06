const express = require('express');
const categoriesController = require('./controllers/categoriesController');
const loginController = require('./controllers/loginController');
const postController = require('./controllers/postController');
const userController = require('./controllers/userController');
require('dotenv/config');

const routes = express.Router();

routes.post('/login', loginController.login);

routes.post('/user', userController.create);
routes.get('/user', userController.index);
routes.get('/user/:id', userController.index);
routes.delete('/user/me', userController.delete);

routes.post('/categories', categoriesController.create);
routes.get('/categories', categoriesController.index);

routes.get('/post/search', postController.index);
routes.post('/post', postController.create);
routes.put('/post/:id', postController.update);
routes.delete('/post/:id', postController.delete);
routes.get('/post', postController.index);
routes.get('/post/:id', postController.index);

module.exports = routes;
