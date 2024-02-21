const express = require('express');

const postController = require('../controllers/post');
const authMiddleware = require('../middleware/authmiddleware')

const postRouter = express.Router()

postRouter.post('/create', authMiddleware.verifyToken, postController.createPost)
postRouter.get('/getpost', authMiddleware.verifyToken, postController.viewAllPosts)
module.exports = postRouter;