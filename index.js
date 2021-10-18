const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const User = require('./controllers/User');
const Login = require('./controllers/Login');
const Category = require('./controllers/Category');
const validateToken = require('./services/validateToken');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', User.createUser);
app.post('/login', Login.login);
app.post('/categories', validateToken, Category.createCategory);

app.get('/user', validateToken, User.getUser);
app.get('/user/:id', validateToken, User.getById);
