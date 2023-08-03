const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(" ");
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
let result;

if (A>B){
    result = '>'
} else if (A<B){
     result = '<'
} else if  (A==B){
 result = "=="
}

console.log(result);