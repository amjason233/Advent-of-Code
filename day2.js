// input the data
const fs = require('fs');
const allNums = fs.readFileSync('day2/data.txt', 'utf8');

// master method to separte array elements
function findSum(allNums,func) {
    const allRows = allNums.split('\n').map((row) => row.split('\t').map((digit) => parseInt(digit)));
    return allRows.reduce(func, sum);
}

// part 1
function findDifference(prev, curr){
    return prev + (Math.max(...curr) - (Math.min(...curr)));
}

// part 2
function isDivisible(prev, curr){
    for(let i = 0; i<curr.length-1; i++){
        for(let j = 1 + i; j < curr.length; j++){
            if(curr[i] % curr[j] == 0){
                return prev + (curr[i]/curr[j]);
            } else if (curr[j] % curr[i] == 0){
                return prev + (curr[j]/curr[i]);
            }
        }
    }
    return 0; //should never reach this, but just to be safe
}
module.exports = {
    findSum,
    findDifference,
    isDivisible
};
