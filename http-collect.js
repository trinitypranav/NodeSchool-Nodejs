const http = require('http');
const url = process.argv[2];

http.get(url, (response)=>{
    response.setEncoding('utf-8');
    let string = "";
    response.on('data', (data)=>{
        string = string + data;
    });
    response.on('error', (error)=>{
        console.log(error);
    });
    response.on('end', ()=>{
        console.log(string.length);
        console.log(string);
    })

})


// 'use strict'
// const http = require('http')
// const bl = require('bl')
// using arrow functions
// http.get(process.argv[2], (response)=>{
//     response.pipe(bl((err, data)=>{
//         if (err) {
//             return console.error(err)
//         }
//         data=data.toString();
//         console.log(data.length);
//         console.log(data);
//     }))
// })
// using normal functions
// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//         if (err) {
//             return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })