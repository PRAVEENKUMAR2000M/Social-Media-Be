const express = require('express');
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/authmiddleware');
const userRouter = express.Router()

userRouter.post('/signup', userController.signup)
userRouter.post('/signin', userController.signin);
userRouter.get('/getuser', authMiddleware.verifyToken, userController.getUser)
module.exports = userRouter