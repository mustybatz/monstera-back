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
    },
    cp: {
        type: Number
    },
    street: {
        type: String
    },
    exteriorNumber: {
        type: String
    },
    interiorNumber: {
        type: String
    },
    suburb: {
        type: String
    },
    referencia: {
        type: String
    },
    cart: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }]

});

const User = mongoose.model('User', userSchema);

module.exports = User;