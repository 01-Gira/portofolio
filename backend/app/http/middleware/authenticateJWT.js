const jwt = require('jsonwebtoken');

// Middleware untuk autentikasi JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Jika token tidak ada

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Jika token tidak valid

    req.user = user; // Menyimpan user di request object
    next();
  });
};

module.exports = authenticateJWT;
