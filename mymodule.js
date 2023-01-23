const fs = require("fs");
const path = require("path");

function filterList(dirName, extension, callback){
    fs.readdir(dirName, (err, files)=>{
        if(err) return callback(err);
        files = files.filter(file => path.extname(file) ===`.${extension}`);
        callback(null,files);
    })
}

module.exports = filterList;

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//     fs.readdir(dir, function (err, list) {
//         if (err) {
//             return callback(err)
//         }

//         list = list.filter(function (file) {
//             return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//     })
// }