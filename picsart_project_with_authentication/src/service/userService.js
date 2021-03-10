const mongoose = require('mongoose');
const User = require('../persistence/model/user/User')
const jwt = require('jsonwebtoken');
const multer = require('multer')

mongoose.connect('mongodb://127.0.0.1:27017/PicsArt_App', {
    useCreateIndex: true,
    useNewUrlParser: true
})


const signUp = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
};

const selectAllUsers = async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
}

const signIn = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = jwt.sign({_id: user._id}, process.env.SECRET_WORD,{ expiresIn: '7200s' });
        res.send({user, token});
    } catch (error) {
        res.send(error);
    }
}

const upload = multer({
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            cb(new Error('File should be in form of jpg,png or jpeg'));
        }
        cb(undefined, true);
    }
});


const updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createdAt: Date.now()
        }, {
            new: true,
            runValidators: true
        });

        res.send(updatedUser);
    } catch (error) {
        res.send(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.user.id);
        res.send(deleteUser);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    signUp: signUp,
    selectAllUsers: selectAllUsers,
    signIn: signIn,
    upload: upload,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById
}