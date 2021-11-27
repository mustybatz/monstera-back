const { Router } = require('express');
const { createProductController, getProductsController, getProductController, updateProductController, deleteProductController } = require('./product.controller');

const productRouter = Router();

productRouter.post('/', createProductController);
productRouter.get('/', getProductsController);
productRouter.get('/:id', getProductController);
productRouter.put('/:id', updateProductController);
productRouter.delete('/:id', deleteProductController);


module.exports = productRouter;