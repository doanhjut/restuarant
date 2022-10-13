
const faceNoti = require("./face/checkface")
const changePage = require("./face/changePage")
let initSockets = (io) => { //nhận được io từ server tối đa 10
    faceNoti(io);
    changePage(io);
}
module.exports=initSockets