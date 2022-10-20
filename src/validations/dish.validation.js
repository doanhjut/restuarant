const Joi = require('joi');
const dish = {
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
const getDish = {
    query: Joi.object().keys({
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
const updateDish = {
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
    dish,
    getDish,
    updateDish
};
