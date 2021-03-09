const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('Email is not valid!');
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
    },
    age: {
        type: String,
        validate: function (value) {
            if (value < 0) {
                throw new Error('Age must not be negative');
            } else if (value > 120) {
                throw new Error('Age must not be greater than 120')
            }
        },
        default: 0
    },
})

module.exports = User;
