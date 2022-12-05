const fs = require("fs");
const data = fs.readFileSync("../Input/Day04.txt", "utf-8");
const input = data.split(/\r?\n/);

const partOne = function(input) {
    let score = 0;
    for (let i = 0; i < input.length; i++) {
        let elfPair = input[i].split(/[-,]+/).map(element => parseInt(element));

        if ((elfPair[0] <= elfPair[2] && elfPair[1] >= elfPair[3]) || (elfPair[0] >= elfPair[2] && elfPair[1] <= elfPair[3])) {
            score++;
        }
    }
    return score;
}

const partTwo = function(input) {
    let score = 0;
    for (let i = 0; i < input.length; i++) {
        let elfPair = input[i].split(/[-,]+/).map(element => parseInt(element));
        let elfOneFirst = elfPair[0];
        let elfOneLast = elfPair[1];
        let elfTwoFirst = elfPair[2];
        let elfTwoLast = elfPair[3];
        //Logical equivalence
        if ((elfOneFirst >= elfTwoFirst && elfOneFirst <= elfTwoLast) || (elfOneLast <= elfTwoLast && elfOneLast >= elfTwoFirst)
            || (elfTwoFirst >= elfOneFirst && elfTwoFirst <= elfOneLast) || (elfTwoLast <= elfOneLast && elfTwoLast >= elfOneFirst)) {
            score++;
        }
    }
    return score;
}

console.log(partOne(input));
console.log(partTwo(input));
