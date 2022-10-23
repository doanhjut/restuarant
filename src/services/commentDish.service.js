const httpStatus = require('http-status');
const { CommentDish } = require('../models');
const ApiError = require('../utils/ApiError');
/**
 * Get camera by id
 * @param {ObjectId} id
 * @returns {Promise<Camera>}
 */
const getBookById = async (id) => {
  return CommentDish.findById(id);
};
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<Book>}
 */
const createComment = async (commentBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return CommentDish.create(commentBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getComment = async (filter, options) => {
  console.log(options);

  const users = await CommentDish.paginate(filter, options);
  return users;
};
module.exports = {
  createComment,
  getComment,
};
