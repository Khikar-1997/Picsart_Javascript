const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    description: {
        type: String,
        required: true,
        trim: true
    },
    photo: [{}],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;