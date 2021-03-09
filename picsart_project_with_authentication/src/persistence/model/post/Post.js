const mongoose = require('mongoose');
const validator = require('validator');

const Post = mongoose.model('Post',{
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Post;