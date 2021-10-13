const express = require('express');
const bodyParser = require('body-parser');

const users = require('./Routes/users');
const { handleErrors } = require('./Middlewares/errors');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.use('/user', users);
app.use(handleErrors);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
