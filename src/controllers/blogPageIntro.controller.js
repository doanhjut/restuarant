const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { BlogPageIntroService } = require('../services');

const updateBlogPageIntroService = catchAsync(async (req, res) => {
  const comment = await BlogPageIntroService.updateBlogPageIntroService(body);
  io.emit("reset_comment",``) 
  res.status(httpStatus.OK).send({ data: comment, msg: "createComment succsessfuly !!!", success: true });
});

const getBlogPageIntro = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['phoneNumber']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await BlogPageIntroService.getBlogPageIntro(filter, options);
  res.send(result);
});



module.exports = {
  updateBlogPageIntroService,
  getBlogPageIntro,
};
