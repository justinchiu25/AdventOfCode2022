const fs = require("fs");
const data = fs.readFileSync("../Input/Day01.txt", "utf-8");
const input = data.split(/\r?\n/);


//When there is an empty string, length = 0; there is a new elf
//iterate through Inputs
const partOne = function(input) {
    let largestElf = 1;
    let currentElf = 1;
    let tempCount = 0;
    let result = 0;
    input.map(element => {
        if (element.length === 0) {
            if (tempCount > result) {
                largestElf = currentElf;
                result = tempCount;
            }
            tempCount = 0;
            currentElf++;
        }
        tempCount += +element;
    })

    return result;
}

const partTwo = function(input) {
    let resultArray = [];
    let tempCount = 0;
    input.map(element => {
        if (element.length === 0) {
            resultArray.push(tempCount);
            tempCount = 0;
        }
        tempCount += +element;
    })
    resultArray.sort((a,b) => (b-a));
    
    result = resultArray[0] + resultArray[1] + resultArray[2];
    return result;
}

console.log("Part One: " + partOne(input));
console.log("Part Two: " + partTwo(input));