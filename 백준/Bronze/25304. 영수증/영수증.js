const { log } = require("console");
const fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const inputData = fs.readFileSync(filePath).toString().split("\n");

let result;
let verification = 0;
const total = parseInt(inputData[0]); 
const category = parseInt(inputData[1]); 

for (let i = 2; i < category + 2; i++) {
    const numbers = inputData[i].split(" ").map(Number); 
    const A = numbers[0];
    const B = numbers[1];
    verification += A * B;
}

if (total === verification) {
    result = 'Yes';
} else {
    result = 'No';
}
console.log(result);