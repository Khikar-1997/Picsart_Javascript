const express = require('express');
require('./service/userService');
require('./service/postService');
const User = require('./persistence/model/user/User');
const Post = require('./persistence/model/post/Post');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.get('/users',(req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

app.get('/users/:id', (req,res) => {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        if (!user){
            return res.status(404).send();
        }
        res.send(user);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

app.get('/posts',(req, res) => {
    Post.find({}).then((posts) => {
        res.send(posts);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

app.get('/posts/:id', (req,res) => {
    const _id = req.params.id;
    Post.findById(_id).then((post) => {
        if (!post){
            return res.status(404).send();
        }
        res.send(post);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

app.post('/posts', (req, res) => {
    const post = new Post(req.body);

    post.save().then(() => {
        res.status(201).send(post);
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('server is up on port ' + port);
})