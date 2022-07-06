


const socketController = (socket) => {
        console.log('Cliente conectado ', socket.id);

        socket.on('disconnect', () => {
            console.log('Cliente desconectado ', socket.id);
        });

        socket.on('enviar-mensaje', (payload) => {
            
            socket.broadcast.emit('enviar-mensaje', payload);

        });


        // socket.on('enviar-mensaje', (payload, callback) => {
            
        //     const id = 123456;
        //     socket.broadcast.emit('enviar-mensaje', payload);
        //     //callback(id);

        // })
    }

    



module.exports = {
    socketController
}