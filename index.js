const express = require('express');
const bodyParser = require('body-parser');
const { createUser, getAll, getById } = require('./controller/user');
const { userLogin } = require('./controller/login');
const { tokenValidation } = require('./middleware/tokenValidation');
const { createCategories, getAllCategories } = require('./controller/categories');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUser);
app.post('/login', userLogin);
app.post('/categories', tokenValidation, createCategories);

app.get('/user', tokenValidation, getAll);
app.get('/user/:id', tokenValidation, getById);
app.get('/categories', tokenValidation, getAllCategories);
