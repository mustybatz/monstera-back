const { Router } = require('express');
const { createAccountController, getUsersController, updateUserController, deleteUserController, signInController } = require('./user.controller');

const userRouter = Router();

userRouter.post('/signup', createAccountController);
userRouter.get('/', getUsersController);
userRouter.put('/:id', updateUserController)
userRouter.delete('/:id', deleteUserController);
userRouter.post('/signin', signInController);


module.exports = userRouter;