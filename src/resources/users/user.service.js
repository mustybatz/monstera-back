const UserModel = require('./user.model');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const serverConfig = require('../../config/server.config');

async function createUser(user) {

    const newUser = new UserModel(user);

    newUser.password = await bcrypt.hash(newUser.password, 10);

    await newUser.save();
}

async function getUsers() {
    const users = await UserModel.find().select('-password').exec();

    return users;
}

async function getUser(id) {
    const user = await UserModel.findById(id).exec();

    if (!user) {
        throw new Error('User not found');
    }

    return user;
}

async function getUserByEmail(email) {
    const user = await UserModel.findOne({ email }).exec();
    return user;
}

function updateUser(id, user) {
    return UserModel.findByIdAndUpdate(id, user);
}

async function deleteUser(id, user) {
    await UserModel.findByIdAndDelete(id);
}

async function signIn(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    if (!(await bcrypt.compare(password, user.password))) {
        throw new Error('Password doesnt match');
    }

    const token = sign({ id: user._id, role: user.role }, serverConfig.getValue('JWT_SECRET'));

    return token;
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    getUser,
    signIn,
    getUserByEmail
}