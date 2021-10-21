const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const usersController = require('./src/controllers/usersController');
const loginController = require('./src/controllers/loginController');
const categoriesController = require('./src/controllers/categoriesController');
const blogPostsController = require('./src/controllers/blogPostsController');

const nameValidation = require('./src/middlewares/nameValidation');
const emailValidation = require('./src/middlewares/emailValidation');
const passwordValidation = require('./src/middlewares/passwordValidation');
const { existingUserValidation,
  userNotFoundValidation } = require('./src/middlewares/existingUserValidation');
const { tokenValidation } = require('./src/middlewares/loginValidation');
const categoryValidation = require('./src/middlewares/categoryValidation');
const { blogPostsValidations } = require('./src/middlewares/blogPostsValidations');

app.post('/user', nameValidation, emailValidation, passwordValidation, existingUserValidation,
  usersController.create);
app.get('/user', tokenValidation, usersController.getAll);
app.get('/user/:id', tokenValidation, usersController.getById);

app.post('/login', emailValidation, passwordValidation,
  userNotFoundValidation, loginController.successfulLogin);

app.post('/categories', tokenValidation, categoryValidation, categoriesController.create);
app.get('/categories', tokenValidation, categoriesController.getAll);

app.post('/post', blogPostsValidations, tokenValidation, blogPostsController.create);
