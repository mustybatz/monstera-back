const { Router } = require('express');
const productRouter = require('./resources/products/product.routes');
const userRouter = require('./resources/users/user.routes');

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter)

module.exports = router;