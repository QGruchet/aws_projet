const userService = require('../services/user.service');
const httpStatus = require('http-status-codes');

async function list(_req, res) {
  res.send(await userService.findAll());
}

async function login(req, res) {
  const { login, password } = req.body;
  if (!login)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No email or username provided');
  if (!password)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No password provided');
  const user = await userService.authenticate(login, password);
  if (!user)
    return res.status(httpStatus.StatusCodes.UNAUTHORIZED).send('Invalid email or password');
  const accessToken = userService.generateAccessToken(user);
  res.json({ user, accessToken });
}

async function me(req, res) {
  req.query.id = req.id;
  await profile(req, res);
}

async function profile(req, res) {
  const { id } = req.query;
  if (!id)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No id provided');
  const user = await userService.findById(Number(id));
  if (!user)
    return res.status(httpStatus.StatusCodes.NOT_FOUND).send('User not found');
  res.send(user);
}

async function signUp(req, res) {
  const { username, email, password } = req.body;
  if (!username)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No username provided');
  if (!email)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No email provided');
  if (!password)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No password provided');
  let user = await userService.findByUsername(username);
  if (user) {
    return res.status(httpStatus.StatusCodes.CONFLICT)
      .send({ name: 'username', message: 'Username already exists' });
  }
  user = await userService.findByEmail(email);
  if (user) {
    return res.status(httpStatus.StatusCodes.CONFLICT)
      .send({ name: 'email', message: 'Email already exists' });
  }
  user = await userService.create(username, email, password);
  if (!user)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('Error creating user');
  const accessToken = userService.generateAccessToken(user);
  res.send({ user, accessToken });
}

module.exports = {
  list,
  login,
  profile,
  signUp
};
