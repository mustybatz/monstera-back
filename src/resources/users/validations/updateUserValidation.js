const Joi = require('joi');

const editUserSchema = Joi.object({
    email: Joi.string().email().message('Must be a valid email address').optional(),
    firstName: Joi.string().min(3).message('first name is required!').optional(),
    lastNameF: Joi.string().min(3).message('last name F is required!').optional(),
    lastNameM: Joi.string().min(3).message('last name M is required!').optional(),
    birthDay: Joi.string().isoDate().message('Must be a valid ISO date').optional(),
    role: Joi.string().optional()
});


module.exports = editUserSchema;