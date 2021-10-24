const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const { PORT = 3000 } = process.env;

const Users = require('./controllers/userController');
const Login = require('./controllers/loginController');
const Category = require('./controllers/categoryController');
const Post = require('./controllers/postController');
const { validationToken } = require('./utils/util');

// User
app.post('/user', Users.createUser);
app.get('/user', validationToken, Users.userGetAll);
app.get('/user/:id', validationToken, Users.UserGetById);

// login
app.post('/login', Login.loginUser);

// category
app.post('/categories', validationToken, Category.createCategory);
app.get('/categories', validationToken, Category.getAllCategory);

// post
app.post('/post', validationToken, Post.createPost);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
