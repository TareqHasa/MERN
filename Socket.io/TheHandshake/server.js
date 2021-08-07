const express = require("express");
const cors = require('cors');
const { Socket } = require("socket.io");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const server = app.listen(8000, () => console.log("The server is all fired up on port 8000"));


const io = require('socket.io')(server, { cors: true });
io.on("connection", socket => {
    console.log(socket.id)
    console.log('Nice to meet you (shakes hand)')
    socket.on("event_from_client", data => {
        // socket.emit("send_data_to_all_other_clients","hello tariq")
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    })
})