// Create a file named http-client.js.  
   
//   Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Write the String contents of each  
//   "data" event from the response to a new line on the console (stdout). 

const http = require("http");
const url = process.argv[2];

http.get(url,(response)=>{
    response.setEncoding('utf8');
    response.on('data', (data)=>{
        console.log(data);
    });
    response.on('error', (error)=>{
        console.log(error);
    });
    response.on('end', (end)=>{
        //console.log(end);
    });
})

// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
// }).on('error', console.error)