const httpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');

function checkAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log('authHeader', authHeader);
  if (!authHeader)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST)
      .send('No token provided');
  try {
    const token = authHeader.split(' ')[1];
    req.user = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    res.status(httpStatus.StatusCodes.UNAUTHORIZED)
      .send('Invalid token provided');
  }
};

module.exports = checkAuth;
