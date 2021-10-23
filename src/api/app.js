require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const route = require('../routes');
const error = require('../middlewares/Errors');

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

route.users(app);
route.login(app);
route.category(app);

app.use(error);

module.exports = app;
