const postService = require('../service/postService');
const auth = require('../service/authentication/auth');
const express = require('express');
const router = new express.Router();

router.post('/', auth,postService.createPost);

router.post('/photos', auth,postService.createPhoto);

router.get('/', auth, postService.getALLPosts);

router.get('/recently/:id', auth, postService.getRecentPosts);

router.get('/photo/:id/:photoId',auth,postService.getPhotoById);

router.get('/search/:key',auth,postService.searchByDescription);

router.patch('/:id/:index', postService.updatePost);

router.delete('/:id', auth, postService.deletePostById);

module.exports = router;