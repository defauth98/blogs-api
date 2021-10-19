const express = require('express');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/UserRoute');

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.use(UserRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
