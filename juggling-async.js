const http = require('http');
const bl = require('bl');

let array = [];
let count=0;
for(let i=0; i<3; i++){
    http.get(process.argv[i+2], (response)=>{
        response.pipe(bl((error, data)=>{
            if(error) return console.error(error);
            data = data.toString();
            array[i]=data;
            count++;
            if(count==3){
                printArray(array);
            }
        }))
    })
}

function printArray(array){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults() {
//     for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//     }
// }

// function httpGet(index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }

//             results[index] = data.toString()
//             count++

//             if (count === 3) {
//                 printResults()
//             }
//         }))
//     })
// }

// for (let i = 0; i < 3; i++) {
//     httpGet(i)
// }