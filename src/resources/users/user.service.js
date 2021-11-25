const UserModel = require('./user.model');
const bcrypt = require('bcrypt');

async function createUser(user) {
    
    const newUser = new UserModel(user);

    newUser.password = await bcrypt.hash(newUser.password, 10);

    await newUser.save();
}