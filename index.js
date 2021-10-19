const express = require('express');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/UserRoute');

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(UserRoutes);

app.listen(PORT, '127.0.0.1', () => console.log(`ouvindo porta ${PORT}!`));
