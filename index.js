const express = require('express');
const bodyParser = require('body-parser');

const Users = require('./controller/userController');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// Requisito 01
app.post('/user', Users.create);

// Requisito 02
app.post('/login', Users.login);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
