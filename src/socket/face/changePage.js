let changePage = (io) => {
    let clients = {};
    io.on("connection", (socket) => { 
        socket.on("change-page", (data) => {
            if(data.action =="up" || data.action =="down"){
                io.emit("change-page",{
                    "action":data.action,
                });
            }else{
                io.emit("change-page-dishs",{
                    "action":data.action,
                });
            }
            // console.log("recognize-face-check"+data.faceattr);
        })
        // socket.on("disconnect", () => {
        // })
    })
}
module.exports = changePage;