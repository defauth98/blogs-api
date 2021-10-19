const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const erroMessage = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

app.use('/user', routes.User);

app.use(erroMessage);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;