const httpStatus = require('http-status');
const { Dish } = require('../models');
const ApiError = require('../utils/ApiError');
/**
 * Get camera by id
 * @param {ObjectId} id
 * @returns {Promise<Camera>}
 */
const getBookById = async (id) => {
  return Dish.findById(id);
};
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<Book>}
 */
const createDish = async (dishBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return Dish.create(dishBody);
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
const getDish = async (filter, options) => {


  const users = await Dish.paginate(filter, options);
  console.log(users);
  return users;
};
/**
 * Get dish by id
 * @param {ObjectId} id
 * @returns {Promise<Dish>}
 */
 const getDishById = async (id) => {
    return Dish.findById(id);
  };
/**
 * Update dish by id
 * @param {ObjectId} dishId
 * @param {Object} updateBody
 * @returns {Promise<Dish>}
 */
 const updateDishById = async (dishID, updateBody) => {
    const dish = await getDishById(dishID);
    if (!dish) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Dish not found');
    }
    Object.assign(dish, updateBody);
    await dish.save();
    return dish;
  };

module.exports = {
  createDish,
  getDish,
  updateDishById,
  getDishById
};
