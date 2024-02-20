const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    description: String,

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments',
    }],

    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],

    title: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"title",
    }],

    description: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'description'
    }],

    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('post', postSchema, 'posts');