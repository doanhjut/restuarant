const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    comment: {
      type: String,
    },
    nameCustommer:{
      type: String,
    },
    evaluate: {
      type: String,
    },
    overallReview: {
      type: String,
    },
    nameDish: {
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
const Comment = mongoose.model('Commentdishs', userSchema);

module.exports = Comment;
