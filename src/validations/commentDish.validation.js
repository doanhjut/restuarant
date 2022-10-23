const Joi = require('joi');
const createComment = {
  body: Joi.object().keys({
    "phoneNumber": Joi.string(),
    "nameCustommer": Joi.string(),
    "comment": Joi.string(),
    "evaluate": Joi.string(),
    "overallReview": Joi.string(),
    "nameDish": Joi.string(),
    "date": Joi.string(),
  }),
};
const getComment = {
  query: Joi.object().keys({
    "phoneNumber": Joi.string(),
    "nameCustommer": Joi.string(),
    "comment": Joi.string(),
    "evaluate": Joi.string(),
    "overallReview": Joi.string(),
    "nameDish": Joi.string(),
    "date": Joi.string(),
  }),
};
module.exports = {
  createComment,
  getComment
};
