/*Create a file named http - uppercaserer.js.  
Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper -case and returns it to the client.  
Your server should listen on the port provided by the first argument to your program. */

const http = require('http')
const map = require('through2-map')

const server = http.createServer((request, response)=>{
    if(request.method=='POST'){
        //using request stream directly
        // var body = "";
        // request.setEncoding('utf-8')
        // request.on("data", (chunk)=>{
        //     chunk = chunk.toUpperCase();
        //     body += chunk;
        // });
        // request.on("end", ()=>{
        //     response.end(body);
        // });

        //using thorough2-map to transform the request stream on the fly
        request.pipe(map((chunk)=>{
            return chunk.toString().toUpperCase();
        })).pipe(response)
    }
})

server.listen(process.argv[2])

// 'use strict'
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//     if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//     }

//     req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//     })).pipe(res)
// })

// server.listen(Number(process.argv[2]))