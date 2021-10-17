const express = require('express');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/usersController');
const categoryController = require('./controllers/categoryController.js');

const app = express();

app.use(bodyParser.json());

app.post('/user', userControllers.createUser);
app.post('/login', userControllers.login);
app.get('/user', userControllers.getAllUsers);
app.get('/user/:id', userControllers.getUserById);
app.post('/categories', categoryController.createCategory);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
