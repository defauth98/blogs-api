const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes');
const { verifyToken } = require('./middlewares/loginMiddlewares');
const { getUsersC } = require('./controllers/userController');

const PORT = process.env.PORT || 3000;
const app = express();
// importar middlewares

app.use(bodyParser.json());

app.use('/user', routes.users);
app.use('/login', routes.login);
app.get('/user', verifyToken, getUsersC);
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
