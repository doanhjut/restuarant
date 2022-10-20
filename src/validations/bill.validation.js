const Joi = require('joi');
const bill = {
    body: Joi.object().keys({
        id: Joi.string(),
        name: Joi.string(),
        status: Joi.string(),
        nameCustomer: Joi.string(),
        phoneNumber: Joi.string(),
        dish: Joi.string(),
        pay: Joi.string(),
        date: Joi.string()
    }),
};
const getBill = {
    query: Joi.object().keys({
        name: Joi.string(),
        status: Joi.string(),
        nameCustomer: Joi.string(),
        phoneNumber: Joi.string(),
        dish: Joi.string(),
        pay: Joi.string(),
        date: Joi.string()
    }),
};
const updateBill = {
    body: Joi.object().keys({
        id: Joi.string(),
        lable: Joi.string(),
        content: Joi.string(),
        evaluate: Joi.string(),
        like: Joi.string(),
        star5: Joi.string(),
        star4: Joi.string(),
        star3: Joi.string(),
        star2: Joi.string(),
        star1: Joi.string(),
        img: Joi.string(),
        dislike: Joi.string(),
    }),
};
module.exports = {
    bill,
    getBill,
    updateBill
};
