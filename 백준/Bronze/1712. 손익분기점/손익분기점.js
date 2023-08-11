const { log } = require("console");
const fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const inputData = fs.readFileSync(filePath).toString().split(' ');

const fixedCost = inputData[0]
const costOfProduction = inputData[1]
const productCost = inputData[2]
const margin = productCost - costOfProduction;
const count = Math.floor(fixedCost / margin) + 1 ;

console.log(margin <= 0 ? -1 : count);