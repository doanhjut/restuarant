const Joi = require('joi');
const book = {
  body: Joi.object().keys({
    id:Joi.string(),
    name: Joi.string(),
    status: Joi.string(),
    nameCustomer: Joi.string(),
    phoneNumber: Joi.string(),
  }),
};
const getTable = {
  query: Joi.object().keys({
    name: Joi.number(),
    status: Joi.string(),
    nameCustomer: Joi.string(),
    phoneNumber: Joi.string(),
  }),
};
const deleteBook = {
  body: Joi.object().keys({
      id: Joi.string()
  }),
};
module.exports = {
  book,
  getTable,
  deleteBook
};
