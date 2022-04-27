const express = require('express');
const checkAuth = require('../middlewares/check-auth.middleware');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.get('/me', checkAuth, userController.me);
router.get('/print-list', userController.printList);
router.get('/profile', userController.profile);
router.post('/login', userController.login);
router.post('/sign-up', userController.signUp);

module.exports = router
