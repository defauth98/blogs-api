const { Router } = require('express');
const { createUser, listUsers, findUser, login } = require('../controllers/user.controller');
const { userValidate, userRequired } = require('../validations/user.validation');
const { loginNotEmpty } = require('../validations/login.validation');
const { isAuth } = require('../middlewares/auth');

const router = Router();

router.post('/user', userRequired, userValidate, createUser);
router.get('/user', isAuth, listUsers);
router.get('/user/:id', isAuth, findUser);
router.post('/login', userRequired, loginNotEmpty, login);

module.exports = router;