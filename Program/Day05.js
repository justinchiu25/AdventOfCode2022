const fs = require("fs");
const data = fs.readFileSync("../Input/Day05.txt", "utf-8");
const input = data.split(/\r?\n/);

//Split beginning crates by splitting "/[] /+"
//Figure out how many rows there are
//First row with numbers?

const partOne = function(input) {
    //Find first line that contains the numbers or empty space
    let numberLine = 8;
    let letterStack = [];

    //Set up blocks
    for (let i = 0; i < numberLine; i++) {
        for (let k = 1; k < input[0].length; k+=4) {
            if (input[i][k] !== " ") {
                if (!letterStack[k]) {
                    letterStack[k] = [input[i][k]];
                } else {
                    letterStack[k].push(input[i][k]);
                }
            }
        }
    }

    let newStack = letterStack.filter(element => element.length !== 0);

    for (let j = 0; j < newStack.length; j++) {
        newStack[j] = newStack[j].reverse();
    }

    //Setup Moves
    for (let step = 10; step < input.length; step++) {
        let moves = input[step].replace("move","").replace("from","").replace("to","");
        let currentMove = moves.split("  ");
        let move = +currentMove[0];
        let from = +currentMove[1]-1;
        let to = +currentMove[2]-1;

        for (let s = 0; s < move; s++) {
            let poppedLetter = newStack[from].pop();
            newStack[to].push(poppedLetter);
        }
    }
    let result = [];
    for (let p = 0; p < newStack.length; p++) {
        result[p] = newStack[p].pop();
    }
    return result.join("");
}

const partTwo = function(input) {
    //Find first line that contains the numbers or empty space
    let numberLine = 8;
    let letterStack = [];

    //Set up blocks
    for (let i = 0; i < numberLine; i++) {
        for (let k = 1; k < input[0].length; k+=4) {
            if (input[i][k] !== " ") {
                if (!letterStack[k]) {
                    letterStack[k] = [input[i][k]];
                } else {
                    letterStack[k].push(input[i][k]);
                }
            }
        }
    }

    let newStack = letterStack.filter(element => element.length !== 0);

    for (let j = 0; j < newStack.length; j++) {
        newStack[j] = newStack[j].reverse();
    }

    //Setup Moves
    for (let step = 10; step < input.length; step++) {
        let moves = input[step].replace("move","").replace("from","").replace("to","");
        let currentMove = moves.split("  ");
        let move = +currentMove[0];
        let from = +currentMove[1]-1;
        let to = +currentMove[2]-1;
        
        let holdStack = [];
        for (let s = 0; s < move; s++) {
            let poppedLetter = newStack[from].pop();
            holdStack.push(poppedLetter);
        }
        holdStack.reverse();

        for (let m = 0; m < holdStack.length; m++) {
            newStack[to].push(holdStack[m]);
        }
    }
    let result = [];
    for (let p = 0; p < newStack.length; p++) {
        result[p] = newStack[p].pop();
    }
    return result.join("");
}

console.log(partOne(input));
console.log(partTwo(input));