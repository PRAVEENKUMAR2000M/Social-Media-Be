const post = require('../models/post');
const { find } = require('../models/user');

const postController = {
    createPost: async (request, response) => {
        try {
            const userId = await request.userId
            //    console.log(userId)
            const { title, description } = await request.body
            // console.log(description)
            const posts = new post({
                title,
                description,
                user: userId
            });
            // console.log(posts)
            await posts.save();

            return response.status(200).json({ message: "post created successfully", posts: posts })
        } catch (error) {
            // console.log('post')
            return response.send(error)

        }
    },

    viewAllposts: async (request, response) => {
        try {
            const userId = request.userId
            const posts = await post.find({ user: userId })
            return response.status(200).json({ message: "posts retrieved successfully", posts })
        } catch (error) {
            return response.status(404).json({ message: "token invalid" })
        }
    }
}

module.exports = postController