// Create a file named my-first-io.js.  
//   Write a program that uses a single synchronous filesystem operation to  
//   read a file and print the number of newlines (\n) it contains to the  
//   console (stdout), similar to running cat file | wc -l.  
//   The full path to the file to read will be provided as the first  
//   command-line argument (i.e., process.argv[2]). You do not need to make  
//   your own test file. 

const fs = require('fs');
const filepath = process.argv[2];
const buffer = fs.readFileSync(filepath);
const bufferString = buffer.toString();
const arrayNewlinesCount = bufferString.split("\n");
console.log(arrayNewlinesCount.length-1);

// 'use strict'
// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
