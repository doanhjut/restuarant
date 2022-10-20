const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
    {
        lable: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
        },
        evaluate: {
            type: String,
        },
        like: {
            type: String,
        },
        star5: {
            type: String,
        },
        star4: {
            type: String,
        },
        star3: {
            type: String,
        },
        star2: {
            type: String,
        },
        star1: {
            type: String,
        },
        img: {
            type: String,
        },
        dislike: {
            type: String,
        }
    }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);


// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });
/**
 * @typedef User
 */
const Dish = mongoose.model('Dishs', userSchema);

module.exports = Dish;
