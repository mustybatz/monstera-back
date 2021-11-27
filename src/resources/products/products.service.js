const Product = require("./product.model");

async function createProduct(product) {

    const newProduct = new Product(product);

    await newProduct.save();
}

async function getProducts() {
    const products = await Product.find().exec();

    return products;
}

async function getProduct(id) {
    const product = await Product.findById(id).exec();

    return product;
}

async function updateProduct(id, product) {
    await Product.findByIdAndUpdate(id, product).exec();
}

async function deleteProduct(id) {
    await Product.findByIdAndDelete(id).exec();
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}