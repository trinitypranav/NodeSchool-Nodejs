// Create a file named http-collect.js.  
   
//   Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Collect all data from the server (not  
//   just the first "data" event) and then write two lines to the console  
//   (stdout).  
   
//   The first line you write should just be an integer representing the number  
//   of characters received from the server. The second line should contain the  
//   complete String of characters sent by the server. 

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