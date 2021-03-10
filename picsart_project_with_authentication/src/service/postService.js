const mongoose = require('mongoose');
const Post = require('../persistence/model/post/Post');

mongoose.connect('mongodb://127.0.0.1:27017/PicsArt_App', {
    useCreateIndex: true,
    useNewUrlParser: true
})

const createPost = async (req, res) => {
    try {
        req.body.user = req.user.id;
        console.log(req.body);
        const post = await Post.create(req.body);
        res.send(post);
    } catch (error) {
        res.send(error);
    }
}

const getALLPosts = async (req, res) => {
    try {
        const posts = await Post.find({user: req.user.id}).exec();
        console.log(posts);
        res.send(posts);
    } catch (error) {
        res.send(error);
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            })
        res.send(post);
    } catch (error) {
        res.send(error);
    }
}

const deletePostById = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.send(post)
    } catch (error) {
        res.post(error);
    }
}

const createPhoto = async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        const file = req.files.file;
        if (!post) {
            res.send("No such post");
        }
        if (!req.files) {
            res.send('Please upload a file.')
        }
        if (!file.mimetype.startsWith('photo')) {
            res.send('Please upload an photo file.')
        }
        file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
            const arr = post.photo;
            arr.push(file.name);
            await Post.findByIdAndUpdate(req.params.id, {photo: arr});
            res.send(file.name);
        });
    } catch (error) {
        res.send(error);
    }
}

const getPhotoById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.send(post.photo);
    } catch (error) {
        res.send(error);
    }
}

const getRecentPosts = async (req, res)=>{
    try{
        const posts = await Post.find();
        const array = posts.splice(posts.length-req.params.num).reverse();
        res.send(array);
    }catch(error){
        res.send(error);
    }
}

const searchByDescription = async (req, res) => {
    try {
        const posts = await Post.find();
        const array = [];
        for (let i = 0; i < posts.length; i++)
            if (typeof (posts[i].description) !== 'undefined')
                if (posts[i].description.includes(req.params.desc))
                    array.push(posts[i]);
        res.send(array);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    createPost: createPost,
    getALLPosts: getALLPosts,
    updatePost: updatePost,
    deletePostById: deletePostById,
    createPhoto: createPhoto,
    getPhotoById: getPhotoById,
    getRecentPosts: getRecentPosts,
    searchByDescription: searchByDescription
}