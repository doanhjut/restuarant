let faceNoti = (io) => {
    let clients = {};
    io.on("connection", (socket) => { 
        socket.on("recognize-face-check", (data) => {
            io.emit("recognize-face-check",{
                "imagepath":data.imagepath,
                "name":data.name,
                "faceattr":data.faceattr,
                "mask":data.mask
            });
            console.log("recognize-face-check"+data.faceattr);
        })
        socket.on("disconnect", () => {
        })
    })
}
module.exports = faceNoti;