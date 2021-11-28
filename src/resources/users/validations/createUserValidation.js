const Joi = require('joi');

const createUserSchema = Joi.object({
    email: Joi.string().required().email().message('Must be a valid email address'),
    password: Joi.string().required().min(1).message('Password is required!')
});


module.exports = createUserSchema;