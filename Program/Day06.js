const fs = require("fs");
const data = fs.readFileSync("../Input/Day06.txt", "utf-8");
const input = data.split(/\r?\n/);

const partOne = function(input) {
    const distinctCharacter = 4;
    let current = input[0].split("");
    for (let i = 0; i < current.length;i++) {
        let combo = current.slice(i,i+distinctCharacter);
        combo.sort();
        if (duplicateCheck(combo)){
            continue;
        }      
        return i+distinctCharacter;

    }
}

const partTwo = function(input) {
    const distinctCharacter = 14;
    let current = input[0].split("");
    for (let i = 0; i < current.length;i++) {
        let combo = current.slice(i,i+distinctCharacter);
        combo.sort();
        if (duplicateCheck(combo)){
            continue;
        }
        return i+distinctCharacter;
    }
}

const duplicateCheck = function(input) {
    for (let k = 0; k < input.length - 1; k++) {
        if (input[k] === input[k+1]) {
            return true;
        }
    }
}

console.log(partOne(input));
console.log(partTwo(input));