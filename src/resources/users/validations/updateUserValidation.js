const Joi = require('joi');

const editUserSchema = Joi.object({
    email: Joi.string().email().message('Must be a valid email address'),
    firstName: Joi.string().min(3).message('first name is required!'),
    lastNameF: Joi.string().min(3).message('last name F is required!'),
    lastNameM: Joi.string().min(3).message('last name M is required!'),
    birthDay: Joi.string().isoDate().message('Must be a valid ISO date')
});


module.exports = editUserSchema;