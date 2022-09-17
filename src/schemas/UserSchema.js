const Joi = require('joi');

// customer and admin schema
const User = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().min(8).required(),
    password: Joi.string().required(),
    telephone_number: Joi.string().min(10).max(10),
    location: Joi.string(),
});

// service provider schema extends customer schema
const ServiceProvider = User.keys({
    service_title: Joi.string().required(),
    description: Joi.string().required(),
});

class Event extends Joi.object {
    constructor() {
        super();
        this.event = this.keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            location: Joi.string().required(),
            start_date: Joi.date().required(),
            end_date: Joi.date().required(),
            price: Joi.number().required(),
            service_provider_id: Joi.number().required(),
        });
    }
}

module.exports = { User, ServiceProvider, Event };
