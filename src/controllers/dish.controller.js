const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { dishService } = require('../services');

const createDish = catchAsync(async (req, res) => {
    var io = req.app.get('socketio');
    const body = {
        "lable": req.body.lable,
        "content": req.body.content,
        "img": req.body.img,
        "price": req.body.price,
        "like": 0,
        "dislike": 0,
        "star5": 0,
        "star4": 0,
        "star3": 0,
        "star2": 0,
        "star1": 0,
    }
    const dish = await dishService.createDish(body);
    //   io.emit("reset_dish",``) 
    res.status(httpStatus.OK).send({ data: dish, msg: "createDish succsessfuly !!!", success: true });
});

const getDish = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['phoneNumber']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await dishService.getDish(filter, options);
    res.send(result);
});

const updateDish = catchAsync(async (req, res) => {
    const body = {
        "lable": req.body.lable,
        "price": req.body.price,
        "content": req.body.content,
        "evaluate": req.body.evaluate,
        "like": req.body.like,
        "star5": req.body.star5,
        "star4": req.body.star5,
        "star3": req.body.star3,
        "star2": req.body.star2,
        "star1": req.body.star1,
        "dislike": req.body.dislike,
        "img": req.body.img,
    }
    const dish = await dishService.updateDishById(req.body.id, body);
    res.status(httpStatus.OK).send({ data: dish, msg: "Updated dish succsessfuly !!!", success: true });
});
const getDishById = catchAsync(async (req, res) => {
    const dish = await dishService.getDishById(req.body.id);
    res.status(httpStatus.OK).send({ data: dish, msg: "get dish succsessfuly !!!", success: true });
});
const deleteDish = catchAsync(async (req, res) => {
    await dishService.deleteDishById(req.params.id);
    res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
    createDish,
    getDish,
    getDishById,
    updateDish,
    deleteDish
};
