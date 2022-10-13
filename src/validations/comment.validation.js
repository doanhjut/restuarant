const Joi = require('joi');
const createComment = {
  body: Joi.object().keys({
    phoneNumber: Joi.string(),
    comment: Joi.string(),
    evaluate: Joi.number(),
    like: Joi.number(),
    dislike :Joi.number(),
  }),
};
const getComment= {
  query: Joi.object().keys({
    phoneNumber: Joi.string(),
    comment: Joi.string(),
    evaluate: Joi.number,
    like: Joi.number(),
    dislike :Joi.number(),
  }),
};
module.exports = {
  createComment,
  getComment
};
