// Node Server which will handle socket io connections
const io = require('socket.io')(8000);

const users = {};

console.log("starting server....")

io.on('connection', socket =>{
    
    socket.on('new-user-joined' , names =>{ 
        console.log("user :",names);
        users[socket.id] = names;
        socket.broadcast.emit('user-joined', names);

    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message , name : user[socket.id]})
    });
})