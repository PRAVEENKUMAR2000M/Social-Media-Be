const Post = require('../models/post')
// const { find } = require('../models/user');

const postController = {
    createPost: async (request, response) => {
        try {
            const userId = await request.userId
            //    console.log(userId)
            const { title, description } = await request.body
            // console.log(description)
            const posts = new Post({
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

    viewAllPosts: async (request, response) => {
        try {

            const userId = request.userId;
            console.log('userid', userId)
            const posts = await Post.find({ user: userId });
            console.log(posts)
            return response.json({ message: 'Posts retrieved successfully', posts });
        } catch (error) {
            console.error('Error retrieving posts:', error);
            return response.status(500).json({ error: 'Internal Server Error' });
        }

    }
}

module.exports = postController