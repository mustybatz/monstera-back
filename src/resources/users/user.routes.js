const { Router } = require('express');
const authMiddleware = require('../../middlewares/authentication.middleware');
const { deleteShoppingItemController, getShoppingCartController, createAccountController, getUsersController, updateUserController, deleteUserController, signInController, addToCartController } = require('./user.controller');

const userRouter = Router();

userRouter.post('/signup', createAccountController);
userRouter.get('/', getUsersController);
userRouter.put('/:id', updateUserController)
userRouter.delete('/:id', deleteUserController);
userRouter.post('/signin', signInController);
userRouter.post('/cart/:id', authMiddleware(['basic', 'admin', 'super-admin']), addToCartController);
userRouter.get('/cart', authMiddleware(['basic', 'admin', 'super-admin']), getShoppingCartController);
userRouter.delete('/cart/:id', authMiddleware(['basic', 'admin', 'super-admin']), deleteShoppingItemController);
module.exports = userRouter;