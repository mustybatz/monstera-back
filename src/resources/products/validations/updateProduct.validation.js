const Joi = require('joi');

const updateProductSchema = Joi.object({
    price: Joi.number().optional(),
    name: Joi.string().min(2).optional(),
    image: Joi.string().min(2).optional()
});

module.exports = updateProductSchema;