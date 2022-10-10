// input the data
const fs = require('fs');
const input = fs.readFileSync('day1/data.txt', 'utf8');

// run function
function captcha(input,compIndex){
    let sum = 0;
    const list = input.split("").map((str) => parseInt(str))
    list.forEach((item, i) => {
        // will loop around to compare first with last
        if (item === list[(i + compIndex) % list.length]){ 
            sum += item;
        }
    });
    return sum;
}

// export function for testing
module.exports = {
  captcha
};
