const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/signIn', userController.signIn);
router.post('/login', userController.signIn);

module.exports = router;