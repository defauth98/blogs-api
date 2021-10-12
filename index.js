const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const userRouter = require('./router/UserRouter');

app.use('/user', userRouter);

const loginRouter = require('./router/LoginRouter');

app.use('/login', loginRouter);

const categoryRouter = require('./router/CategoryRouter');

app.use('/categories', categoryRouter);

const postRouter = require('./router/PostRouter');

app.use('/post', postRouter);
