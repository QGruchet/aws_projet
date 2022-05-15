const userService = require('../services/user.service');
const httpStatus = require('http-status-codes');

function list(_req, res) {
  res.send(userService.findAll());
}

function login(req, res) {
  const { login, password } = req.body;
  if (!login)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No email or username provided');
  if (!password)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No password provided');
  const user = userService.authenticate(login, password);
  if (!user)
    return res.status(httpStatus.StatusCodes.UNAUTHORIZED).send('Invalid email or password');
  const accessToken = user.generateAccessToken();
  res.json({ user, accessToken });
}

function me(req, res) {
  res.send(req.user);
}

function profile(req, res) {
  const { id } = req.query;
  if (!id)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No id provided');
  const user = userService.findById(Number(id));
  if (!user)
    return res.status(httpStatus.StatusCodes.NOT_FOUND).send('User not found');
  res.send(user);
}

function signUp(req, res) {
  console.log('sign-up', req.body);
  const { username, email, password } = req.body;
  if (!username)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No username provided');
  if (!email)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No email provided');
  if (!password)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No password provided');
  let user = userService.findByUsername(username);
  if (user)
    return res.status(httpStatus.StatusCodes.CONFLICT).send('Username already exists');
  user = userService.findByEmail(email);
  if (user)
    return res.status(httpStatus.StatusCodes.CONFLICT).send('Email is already taken');
  user = userService.create(username, email, password);
  if (!user)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('Error creating user');
  const accessToken = user.generateAccessToken();
  res.send({ user, accessToken });
}

module.exports = {
  list,
  login,
  me,
  profile,
  signUp
};
