const fs = require('fs');
const input = fs.readFileSync('day4/data.txt', 'utf8');

function part1 (prev, curr){
    const words = curr.split(' ');
    const wordSet = new Set(words);

    if (words.length === wordSet.size){
        return prev + 1;
    }
    return prev;
}

function part2 (prev, curr){
    const words = curr.split(' ');
    let testArray = [];
    words.forEach (word => {
        let wordSplit = word.split('');
        wordSplit.sort();
        word = wordSplit.join('');
        testArray.push(word);
    });
    const wordSet = new Set(testArray);

    if (testArray.length === wordSet.size){
        return prev + 1;
    }
    return prev;
}

function count (input, func) {
    const list = input.split('\n');
    return list.reduce(func, 0);
}

module.exports = {
    count,
    part1,
    part2
};
