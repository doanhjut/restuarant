const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { billService } = require('../services');

const createBill = catchAsync(async (req, res) => {
    var io = req.app.get('socketio');
    const body = {
        "phoneNumber": req.body.phoneNumber,
        "bill": req.body.bill,
        "evaluate": req.body.evaluate,
        "like": 0,
        "dislike": 0,
    }
    const bill = await billService.createBill(body);
    //   io.emit("reset_bill",``) 
    res.status(httpStatus.OK).send({ data: bill, msg: "createBill succsessfuly !!!", success: true });
});

const getBill = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['phoneNumber']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await billService.getBill(filter, options);
    res.send(result);
});

const updateBill = catchAsync(async (req, res) => {
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
    const bill = await billService.updateBillById(req.body.id, body);
    res.status(httpStatus.OK).send({ data: bill, msg: "Updated bill succsessfuly !!!", success: true });
});
const getBillById = catchAsync(async (req, res) => {
    const bill = await billService.getBillById(req.body.id);
    res.status(httpStatus.OK).send({ data: bill, msg: "get bill succsessfuly !!!", success: true });
});
module.exports = {
    createBill,
    getBill,
    getBillById,
    updateBill
};
