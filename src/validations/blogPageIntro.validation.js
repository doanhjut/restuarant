const Joi = require('joi');
const createblogPageIntro = {
  body: Joi.object().keys({
    phoneNumber: Joi.string(),
    comment: Joi.string(),
    evaluate: Joi.number(),
    like: Joi.number(),
    dislike :Joi.number(),
  }),
};
const getblogPageIntro= {
  query: Joi.object().keys({
    phoneNumber: Joi.string(),
    comment: Joi.string(),
    evaluate: Joi.number,
    like: Joi.number(),
    dislike :Joi.number(),
  }),
};
module.exports = {
  createblogPageIntro,
  getblogPageIntro
};
