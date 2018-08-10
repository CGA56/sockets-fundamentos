var socket = io();
//On escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});
// Emmit son para enviar informacion
// socket.emit('enviarMensaje', {
//     usuarios: 'Cristopher',
//     mensaje: 'Hola mundo'
// });

//  emmit con callbacks desde el server
socket.emit('enviarMensaje', {
    usuarios: 'Cristopher',
    mensaje: 'Hola mundo'
}, function(respServer) {
    console.log(respServer);
});

// escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
})