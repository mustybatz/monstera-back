const mongoose = require('mongoose');
const { Schema } = mongoose;


const beanSchema = new Schema({

    score: {
        type: Number,
        min: 1,
        max: 5
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product'
    }
});


const Bean = mongoose.model('Bean', beanSchema);

module.exports = Bean;