const Joi = require("joi");

function validateUser(user) {
  const schema = Joi.object().keys({
    username: Joi.string().min(4).max(20).required(),
    email: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(12).required(),
  });
  return schema.validate(user);
}
module.exports = validateUser;
