const Joi = require('joi');

const createProductSchema = Joi.object({
    price: Joi.number().required(),
    name: Joi.string().min(2).required().messages({
        'string.base': `name should be a string`,
        'string.min': `name should have a min length of {#limit}`,
        'any.required': `name is required`
    }),
    image: Joi.string().min(2).required().messages({
        'string.base': `image should be a string`,
        'string.min': `image should have a min length of {#limit}`,
        'any.required': `image is required`
    }),
    description: Joi.string().min(2).required().messages({
        'string.base': `description should be a string`,
        'string.min': `description should have a min length of {#limit}`,
        'any.required': `description is required`
    })
});

module.exports = createProductSchema;