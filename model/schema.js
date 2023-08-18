const joi = require('joi');

const userSchema = joi.object({
    storeName: joi.string().required(),
    
    location: joi.object({
    city: joi.string().required(),
    state: joi.string().required(),
    postal_code: joi.string().required()
    }).required()

})

module.exports = userSchema;