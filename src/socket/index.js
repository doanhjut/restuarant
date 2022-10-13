
const faceNoti = require("./face/checkface")
let initSockets = (io) => { //nhận được io từ server tối đa 10
    faceNoti(io);
}
module.exports=initSockets