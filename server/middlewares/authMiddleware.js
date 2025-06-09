const jwt = require('jsonwebtoken');

const authMiddleware = (rolesPermitidos = []) => {
  return (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).send('Token no proporcionado');
    }

    jwt.verify(token.split(' ')[1], 'secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).send('Token inválido');
      }

      req.user = decoded;

      if (rolesPermitidos.length > 0 && !rolesPermitidos.includes(decoded.isAdmin ? 'admin' : 'user')) {
        return res.status(403).send('Acceso denegado');
      }

      next();
    });
  };
};

module.exports = authMiddleware;