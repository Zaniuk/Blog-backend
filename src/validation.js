const Joi = require('joi')

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(8).required(),
    username: Joi.string().min(8).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required()
 })
 return schema.validate(data)
}
const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(8).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required()
 })
 return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
