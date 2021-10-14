const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');
const { validateLogin } = require('../validations/loginValidation');

router.post('/login', 
  validateLogin,
  loginController.loginController);

module.exports = router;
