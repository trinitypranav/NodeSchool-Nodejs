const fs = require("fs");
const filepath = process.argv[2];
fs.readFile(filepath,(err, fileContents)=>{
    if (err) return console.error(err);
    const string = fileContents.toString();
    const arrayNewlines = string.split("\n");
    console.log(arrayNewlines.length-1);
});

// 'use strict'
// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//     if (err) {
//         return console.log(err)
//     }
//     // fs.readFile(file, 'utf8', callback) can also be used
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// })