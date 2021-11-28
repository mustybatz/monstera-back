const BeanModel = require('./bean.model');

async function createBean(userId, productId, score) {

    const bean = new BeanModel({ author: userId, product: productId, score });

    await bean.save();
}

async function getProuctScore(productId) {

    const beans = BeanModel.find({ product: productId });

    return beans;
}

module.exports = {
    createBean,
    getProuctScore
}