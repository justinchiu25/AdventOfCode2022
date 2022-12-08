const fs = require("fs");
const data = fs.readFileSync("../Input/Day07.txt", "utf-8");
const input = data.split(/\r?\n/);

const partOne = function(input) {
    let commands = [];
    let stack = [];
    for (let i = 0; i < input.length- 1;i++) {
        let splitData = input[i].split(" ");
        
        if (splitData[1] === "ls") {
            continue;
        } 
        stack.push(splitData);
    }
    //Go through the stack and adding until ls
    let stacklength = stack.length;
    let fileMax = 100000;
    let result = 0;
    let tempTotal = 0;

    let dict = [];
    for (let k = 0; k < stacklength; k++) {
        let command = stack.pop();
        if (command[0] === "$"){
            console.log()
            if (tempTotal <= fileMax) {
                result+= tempTotal;
            }
            tempTotal = 0;
            continue;
        }
        if (!dict[command[1]]) {
            dict[command[1]] = +command[0];
        }

        tempTotal += +command[0];
        console.log(tempTotal+ " " + +command[0]);
    }
    return result;
}


console.log(partOne(input));