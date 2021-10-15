const { User } = require('../database/models');
const validation = require('../validations');
const { getStatusCode } = require('../utils/statusCode');

async function createUser(req, res, next) {
  try {
    const newUser = req.body;
    const { status } = getStatusCode('created');

    validation.verifyName(newUser.displayName);
    validation.verifyEmail(newUser.email);
    validation.verifyPassword(newUser.password);

    const token = validation.getToken(newUser.email);

    const [, created] = await User.findOrCreate({
      where: { email: newUser.email },
      defaults: {
        ...newUser,
      },
    });
    validation.isUserRegistered(created);

    res.status(status).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
};