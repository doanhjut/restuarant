const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { bookService } = require('../services');

const book = catchAsync(async (req, res) => {
  const body = {
    "name": req.body.name,
    "status": req.body.status,
    "nameCustomer": req.body.nameCustomer,
    "phoneNumber": req.body.phoneNumber
  }
  console.log(body);
  const book = await bookService.book(req.body.id, body);
  res.status(httpStatus.OK).send({ data: book, msg: "book table succsessfuly !!!", success: true });
});
const createBook = catchAsync(async (req, res) => {
  var io = req.app.get('socketio');
  const body = {
    "name": req.body.name,
    "status": req.body.status,
    "nameCustomer": req.body.nameCustomer,
    "phoneNumber": req.body.phoneNumber
  }
  const comment = await bookService.createBook(body);
  res.status(httpStatus.OK).send({ data: comment, msg: "createBook succsessfuly !!!", success: true });
});
const getTable = catchAsync(async (req, res) => {
  // console.log(req.body.day);
  const filter = pick(req.query, ['name', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await bookService.getTable(filter, options);
  console.log(result);
  res.send(result);
});

const getAllTable = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await bookService.getTable(filter, options);
  res.send(result);
});

module.exports = {
  book,
  getTable,
  getAllTable,
  createBook
};
