const httpStatus = require('http-status');
const { BlogPageIntro } = require('../models');
const ApiError = require('../utils/ApiError');
/**
 * Get camera by id
 * @param {ObjectId} id
 * @returns {Promise<Camera>}
 */
const getBookById = async (id) => {
  return BlogPageIntro.findById(id);
};
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<Book>}
 */
const updateBlogPageIntroService = async (commentBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return BlogPageIntro.create(commentBody);
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
const getBlogPageIntro = async (filter, options) => {

  const blogPageIntro = await BlogPageIntro.paginate(filter, options);
  return blogPageIntro;
};
module.exports = {
  updateBlogPageIntroService,
  getBlogPageIntro,
};
