const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const segredo = 'bem-te-vi';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, segredo);
    const { email } = decoded.data;
    const user = await Users.findOnde({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuario do token.' });
    }

    req.user = user;
    next();
  } catch (_err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = { validateJWT };
