const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/validate', userController.userValidation);
router.post('/create', userController.createUser);
router.post('/login', userController.login);

module.exports = router;
// comit