const { log } = require("console");
const fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const inputData = fs.readFileSync(filePath).toString().split(" ");

const I = inputData[0]
const A = inputData[1]
const N = 0

console.log((I* (A - 1)) + 1);