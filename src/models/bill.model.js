const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
        },
        nameCustomer: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        dish: {
            type: String,
        },
        pay: {
            type: String,
        },
        date: {
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
const Dish = mongoose.model('Bills', userSchema);

module.exports = Dish;
