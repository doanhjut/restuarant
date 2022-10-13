const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { commentService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  var io = req.app.get('socketio');
  const body = {
    "phoneNumber": req.body.phoneNumber,
    "comment": req.body.comment,
    "evaluate": req.body.evaluate,
    "like": 0,
    "dislike": 0,
  }
  const comment = await commentService.createComment(body);
  io.emit("reset_comment",``) 
  res.status(httpStatus.OK).send({ data: comment, msg: "createComment succsessfuly !!!", success: true });
});

const getComment = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['phoneNumber']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await commentService.getComment(filter, options);
  res.send(result);
});



module.exports = {
  createComment,
  getComment,
};
