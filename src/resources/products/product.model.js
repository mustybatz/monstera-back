const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;