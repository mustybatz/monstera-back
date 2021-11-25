const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'basic',
        enum: ['basic', 'admin', 'super-admin']
    },
    firstName: {
        type: String,
        required: true
    },
    lastNameF: {
        type: String,
        required: true
    },
    lastNameM: {
        type: String,
        required: true
    },
    birthDay: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;