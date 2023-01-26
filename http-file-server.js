// Create a file named http-file-server.js.  
   
//   Write an HTTP server that serves the same text file for each request it  
//   receives.  
   
//   Your server should listen on the port provided by the first argument to  
//   your program.  
   
//   You will be provided with the location of the file to serve as the second  
//   command-line argument. You must use the fs.createReadStream() method to  
//   stream the file contents to the response.

const http = require('http')
const fs = require('fs');

const server = http.createServer((request, response)=>{
    // let reader = fs.createReadStream(process.argv[3], {encoding:'utf-8'})
    // reader.on('data', (chunk)=>{
    //     response.write(chunk);
    //     response.end();
    // })

    fs.createReadStream(process.argv[3], {encoding:'utf-8'}).pipe(response);
})
server.listen(process.argv[2]);

// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })

//     fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))