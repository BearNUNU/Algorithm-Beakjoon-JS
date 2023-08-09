const fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const inputData = fs.readFileSync(filePath).toString().split("\n");
const result = [];

for (let i = 1; i < inputData.length; i++) {
  const inputString = inputData[i].trim(); 
  const wordlength = inputString.length;
  
  if (wordlength > 0) {
    const A = inputString.charAt(0); 
    const B = inputString.charAt(wordlength - 1); 
    result.push(A + B);
  }
}

for (const value of result) {
  console.log(value);
}
