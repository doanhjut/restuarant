const httpStatus = require('http-status');
const { Bill } = require('../models');
const ApiError = require('../utils/ApiError');
/**
 * Get camera by id
 * @param {ObjectId} id
 * @returns {Promise<Camera>}
 */
const getBookById = async (id) => {
  return Bill.findById(id);
};
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<Book>}
 */
const createBill = async (billBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return Bill.create(billBody);
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
const getBill = async (filter, options) => {
  console.log(options);

  const users = await Bill.paginate(filter, options);
  return users;
};
/**
 * Get bill by id
 * @param {ObjectId} id
 * @returns {Promise<Bill>}
 */
 const getBillById = async (id) => {
    return Bill.findById(id);
  };
/**
 * Update bill by id
 * @param {ObjectId} billId
 * @param {Object} updateBody
 * @returns {Promise<Bill>}
 */
 const updateBillById = async (billID, updateBody) => {
    const bill = await getBillById(billID);
    if (!bill) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Bill not found');
    }
    Object.assign(bill, updateBody);
    await bill.save();
    return bill;
  };

module.exports = {
  createBill,
  getBill,
  updateBillById,
  getBillById
};
