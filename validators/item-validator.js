const Joi = require("joi");

function validateItem(item) {
  const schema = Joi.object().key({
    title: Joi.string().min(3).max(200).required(),
    desc: Joi.string().min(1).max(255),
    authorId: Joi.string().min(24).max(24),
  });
  return schema.validate(item);
}

// module.exports = validateItem;
