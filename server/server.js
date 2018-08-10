const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

//  modificacion en expres para cambiar el servidor que vamos a definir

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');

// servidor
let server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO= Coneccion direccta con el servidor (Backend).
module.exports.io = socketIO(server);

require('./socket/socket');

// Sin socket
// app.listen(port, (err) => {

//     if (err) throw new Error(err);

//     console.log(`Servidor corriendo en puerto ${ port }`);

// });


// Con socket 


server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});