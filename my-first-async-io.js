// Create a file named my-first-async-io.js.  
//   Write a program that uses a single asynchronous filesystem operation to  
//   read a file and print the number of newlines it contains to the console  
//   (stdout), similar to running cat file | wc -l.  
//   The full path to the file to read will be provided as the first  
//   command-line argument.

const fs = require("fs");
const filepath = process.argv[2];
// fs.readFile(file, 'utf8', callback) can also be used 
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