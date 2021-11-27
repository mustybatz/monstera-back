const Joi = require('joi');

const createUserSchema = Joi.object({
    email: Joi.string().required().email().message('Must be a valid email address'),
    password: Joi.string().required().min(6).message('Password is required!'),
    firstName: Joi.string().required().min(3).message('first name is required!'),
    lastNameF: Joi.string().required().min(3).message('last name F is required!'),
    lastNameM: Joi.string().required().min(3).message('last name M is required!'),
    birthDay: Joi.string().required().isoDate().message('Must be a valid ISO date')
});


module.exports = createUserSchema;