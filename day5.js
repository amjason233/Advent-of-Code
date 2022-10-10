const fs = require('fs');
const input = fs.readFileSync('day5/data.txt', 'utf8');

function part1 (input){
    let jumps = input.split('\n').map((digit) => parseInt(digit));
    let count = 0;
    let index = 0;
    while (index < jumps.length){
        jumps[index] = jumps[index] + 1;
        index += jumps[index] - 1;
        count++;
    }
    return count;
}

function part2 (input){
    let jumps = input.split('\n').map((digit) => parseInt(digit));
    let count = 0;
    let index = 0;
    while (index < jumps.length){
        if(jumps[index] >= 3){
            jumps[index] = jumps[index] - 1;
            index += jumps[index] + 1;
        } else {
            jumps[index] = jumps[index] + 1;
            index += jumps[index] - 1;
        }
        count++;
    }
    return count;
}

module.exports = {
    part1,
    part2
};
