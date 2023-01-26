// Create a file named baby-steps.js.  
//   Write a program that accepts one or more numbers as command-line arguments  
//   and prints the sum of those numbers to the console (stdout). 
const inputArray = process.argv;
let sum = 0;
for(let i=2; i<inputArray.length; i++){
    sum += +inputArray[i];
}
console.log(sum);