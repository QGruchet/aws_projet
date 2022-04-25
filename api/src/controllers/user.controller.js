const httpStatus = require('http-status-codes');
const userService = require('../services/user.service');

exports.me = (req, res) => {

}

exports.profile = (req, res) => {
  const id = req.query.id;
  if (!id)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No id provided');
  console.log(`get profile: ${id}`);
  const user = userService.findById(id);
  if (!user)
    return res.status(httpStatus.StatusCodes.NOT_FOUND).send('User not found');
  res.send(user);
}

exports.login = (req, res) => {
  const email = req.body.email;
  if (!email)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No email provided');
  const password = req.body.password;
  if (!password)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No password provided');
  const user = userService.findByEmail(email);
  // TODO: Hash password
  if (!user || user.password !== password)
    return res.status(httpStatus.StatusCodes.UNAUTHORIZED).send('Invalid email or password');
  res.send(user);
}

exports.signUp = (req, res) => {
  const username = req.body.username;
  if (!username)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No username provided');
  const email = req.body.email;
  if (!email)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No email provided');
  const password = req.body.password;
  if (!password)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('No password provided');
  let user = userService.findByUsername(username);
  if (user)
    return res.status(httpStatus.StatusCodes.CONFLICT).send('Username already exists');
  user = userService.findByEmail(email);
  if (user)
    return res.status(httpStatus.StatusCodes.CONFLICT).send('Email already exists');
  user = userService.create(username, email, password);
  if (!user)
    return res.status(httpStatus.StatusCodes.BAD_REQUEST).send('User already exists');
  res.send(user);
}
