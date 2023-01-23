const inputArray = process.argv;
let sum = 0;
for(let i=2; i<inputArray.length; i++){
    sum += +inputArray[i];
}
console.log(sum);