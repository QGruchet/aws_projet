const httpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST)
      .send('No token provided');
  try {
    /* TODO: Generate a random secret key and store it in the environment variable */
    req.user = jwt.verify(token, 'GENERATED_SECRET');
    next();
  } catch (err) {
    res.status(httpStatus.StatusCodes.BAD_REQUEST)
      .send('Invalid token provided');
  }
};
