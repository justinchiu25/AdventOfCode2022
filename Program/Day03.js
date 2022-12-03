const fs = require("fs");
const data = fs.readFileSync("../Input/Day03.txt", "utf-8");
const input = data.split(/\r?\n/);

const partOne = function(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let letters = input[i].split("");

        const firstHalf = letters.slice(0,letters.length/2);
        const lastHalf = letters.slice(letters.length/2)
        
        for (let k = 0; k < firstHalf.length; k++) {
            let letterCode = "";
            let sum;
            if (lastHalf.includes(firstHalf[k])) {
                letterCode = firstHalf[k].charAt(0).charCodeAt(0);
                
                if (firstHalf[k].toLowerCase() === firstHalf[k]) {
                    sum = (letterCode - 97) + 1
                } else {
                    sum = (letterCode - 65) + 27
                }
                
                result += sum;
                break;
            }
            
        }
    }
    return result;
}

const partTwo = function(input) {
    let result = 0;
    for (let i = 0; i < input.length; i+=3) {
        let letters = input[i].split("");
        let letters2 = input[i+1].split("");
        let letters3 = input[i+2].split("");
 
        for (let k = 0; k < letters.length; k++) {
            let letterCode = "";
            let sum;
            if (letters2.includes(letters[k]) && letters3.includes(letters[k]) ) {
                letterCode = letters[k].charAt(0).charCodeAt(0);
                
                if (letters[k].toLowerCase() === letters[k]) {
                    sum = (letterCode - 97) + 1
                } else {
                    sum = (letterCode - 65) + 27
                }
                
                result += sum;
                break;
            }
            
        }
    }
    return result;
}


console.log("Part One: " + partOne(input));
console.log("Part Two: " + partTwo(input));