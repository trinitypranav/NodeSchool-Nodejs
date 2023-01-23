const mymodule = require("./mymodule");
//"/Users/pranav/Desktop/Nodejs/files","png"
mymodule(process.argv[2],process.argv[3], (err, files)=>{
    if(err) console.log(err);

    files.forEach(file => {
        console.log(file);
    });
});

// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//     if (err) {
//         return console.error('There was an error:', err)
//     }

//     list.forEach(function (file) {
//         console.log(file)
//     })
// })