const fs = require("fs");
const path = require("path");
const dirPath = process.argv[2];
const extension = process.argv[3];
fs.readdir(dirPath, (err, list)=>{
    if (err) return console.error(err);
    for(let i=0; i<list.length; i++){
        //console.log(path.extname(list[i])); //.md
        //console.log(extension); //md
        if(path.extname(list[i])===`.${extension}`){
            console.log(list[i]);
        }
    }
});

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//     if (err) return console.error(err)
//     files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//             console.log(file)
//         }
//     })
// })