const net = require('net');

const server = net.createServer((socket)=>{
    const date = new Date();
    
    // "YYYY-MM-DD hh:mm"  
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const dateValue = date.getDate() < 10 ? '0' + (date.getDate()) : (date.getDate());
    const hours = date.getHours() < 10 ? '0' + (date.getHours()) : (date.getHours());
    const minutes = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : (date.getMinutes());
    //console.log(date.getFullYear() + "-" + month + "-" + dateValue + " " + hours + ":" + minutes);
    socket.write(date.getFullYear() + "-" + month + "-" + dateValue + " " + hours + ":" + minutes + "\n");
    socket.end();
})

server.listen(Number(process.argv[2]));

// 'use strict'
// const net = require('net')

// function zeroFill(i) {
//     return (i < 10 ? '0' : '') + i
// }

// function now() {
//     const d = new Date()
//     return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))