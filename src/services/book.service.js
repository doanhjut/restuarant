const httpStatus = require('http-status');
const { Book } = require('../models');
const ApiError = require('../utils/ApiError');
/**
 * Get camera by id
 * @param {ObjectId} id
 * @returns {Promise<Camera>}
 */
const getBookById = async (id) => {
  return Book.findById(id);
};
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<Book>}
 */
const book = async (bookId, updateBody) => {
  const table = await getBookById(bookId);
  if (!table) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Table book not found');
  }
  Object.assign(table, updateBody);
  await table.save();
  return table;
};
const createBook = async (commentBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return Book.create(commentBody);
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
const getTable = async (filter, options) => {

  const users = await Book.paginate(filter, options);
  return users;
};
/**
* Delete user by id
* @param {ObjectId} userId
* @returns {Promise<User>}
*/
const deleteBookById = async (bookID) => {
  const book = await getBookById(bookID);
  console.log(bookID);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await book.remove();
  return book;
};
module.exports = {
  book,
  getTable,
  createBook,
  deleteBookById,
  getBookById
};
