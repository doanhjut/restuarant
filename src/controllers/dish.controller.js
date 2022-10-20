const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { dishService } = require('../services');

const createDish = catchAsync(async (req, res) => {
    var io = req.app.get('socketio');
    const body = {
        "phoneNumber": req.body.phoneNumber,
        "dish": req.body.dish,
        "evaluate": req.body.evaluate,
        "like": 0,
        "dislike": 0,
    }
    const dish = await dishService.createDish(body);
    //   io.emit("reset_dish",``) 
    res.status(httpStatus.OK).send({ data: dish, msg: "createDish succsessfuly !!!", success: true });
});

const getDish = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['phoneNumber']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await dishService.getDish(filter, options);
    console.log('oke');
    res.send(result);
});

const updateDish = catchAsync(async (req, res) => {
    const body = {
        "lable": req.body.lable,
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
module.exports = {
    createDish,
    getDish,
    getDishById,
    updateDish
};
