const router = require('express').Router();
const controller = require('../controllers/user');
const auth = require('../middlewares/auth');

router.get('/', auth, controller.getAllUsers);
router.post('/', controller.createUser);

module.exports = router;