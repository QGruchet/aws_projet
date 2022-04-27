const httpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');

function checkAuth(req, res, next) {
  const token = req.header('auth-token');
  if (!token)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST)
      .send('No token provided');
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(httpStatus.StatusCodes.UNAUTHORIZED)
      .send('Invalid token provided');
  }
};

module.exports = checkAuth;
