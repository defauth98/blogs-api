const jwt = require('jsonwebtoken');

const SECRET = 'segredo_mais_secreto';

/* Source: https://github.com/tryber/sd-09-project-blogs-api/tree/henriquebelias-blogs-api */
const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, SECRET);
    const { email } = decoded.data;
    req.email = email;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;