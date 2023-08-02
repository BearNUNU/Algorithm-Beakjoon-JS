const fs = require("fs")
const inputData = fs.readFileSync('/dev/stdin').toString().split(" ")
const inputA = parseInt(inputData[0])
const inputB = parseInt(inputData[1])

console.log(inputA + inputB)