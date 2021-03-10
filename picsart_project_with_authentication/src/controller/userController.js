const express = require('express');
const auth = require('../service/authentication/auth');
const userService = require('../service/userService');

const router = new express.Router();

router.post('/', userService.signUp);

router.post('/login', userService.signIn)

router.get('/', userService.selectAllUsers);

router.patch('/',auth,userService.updateUserById)

router.delete('/', auth, userService.deleteUserById);

module.exports = router;