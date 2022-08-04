const Joi = require('joi');

// customer and admin schema
const User = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().min(8).required(),
    password: Joi.string().required(),
    telephone_number: Joi.string().min(10),
    location: Joi.string(),
});

// service provider schema extends customer schema
const ServiceProvider = User.keys({
    service_title: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = { User, ServiceProvider };
