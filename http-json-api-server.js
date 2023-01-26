const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
    if (request.method == 'GET') {
        const myURL = new URL(request.url, 'http://example.com');
        const date = new Date(myURL.searchParams.get('iso'))
        const responseBody = {};
        if (myURL.pathname === "/api/parsetime") {
            responseBody['hour'] = date.getHours();
            responseBody['minute'] = date.getMinutes();
            responseBody['second'] = date.getSeconds();
        }
        if (myURL.pathname === "/api/unixtime") {
            const unixTimestamp = Math.floor(date.getTime());
            responseBody['unixtime'] = unixTimestamp;
        }
        if (responseBody) {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(responseBody));
        }
    }
})

server.listen(Number(process.argv[2]))

// 'use strict'
// const http = require('http')

// function parsetime(time) {
//     return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//     }
// }

// function unixtime(time) {
//     return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//     const parsedUrl = new URL(req.url, 'http://example.com')
//     const time = new Date(parsedUrl.searchParams.get('iso'))
//     let result

//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//     }

//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404)
//         res.end()
//     }
// })
// server.listen(Number(process.argv[2]))