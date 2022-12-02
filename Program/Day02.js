const fs = require("fs");
const data = fs.readFileSync("../Input/Day02.txt", "utf-8");
const input = data.split(/\r?\n/);

//A = Rock , B = Paper , C = Scissor
//X = Rock , Y = Paper , Z = Scissor

//rock = 1, paper = 2, scissor = 3
//draw = 3, win = 6


const scoring = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6
}

const scoring2 = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7
}

const partOne = function(input) {

    let totalScore = 0;

    for (let i = 0 ; i < input.length; i++) {
        totalScore += scoring[input[i]];
    }
    return totalScore;

}

const partTwo = function(input) {

    let totalScore = 0;

    for (let i = 0 ; i < input.length; i++) {
        totalScore += scoring2[input[i]];
    }
    return totalScore;
}

console.log("Part one: " + partOne(input));
console.log("Part two: " + partTwo(input));