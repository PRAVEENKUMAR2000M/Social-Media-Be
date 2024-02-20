const express = require('express');

const postController = require('../controllers/post');
const authMiddleware = require('../middleware/authmiddleware')

const postRouter = express.Router()

postRouter.post('/create', authMiddleware.verifyToken, postController.createPost)
postRouter.get('/', authMiddleware.verifyToken, postController.viewAllposts)
module.exports = postRouter;