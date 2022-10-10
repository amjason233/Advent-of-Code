const spiralMem = require('../day3/day3-amanda');
const assert = require('assert');

describe('spiral memory part 1', function () {
    it('should return 0 with input 1', function () {
        assert.equal(spiralMem.manhattan(1),0);
    });
    it('should return 2 with input 7', function () {
        assert.equal(spiralMem.manhattan(7),2);
    });
    it('should return 3 with input 16', function () {
        assert.equal(spiralMem.manhattan(16),3);
    });
    it('should return 9 with input 120', function () {
        assert.equal(spiralMem.manhattan(120),9);
    });
    it('should return 480 with input 347991', function () {
        assert.equal(spiralMem.manhattan(347991),480);
    });
});

describe('spiral memory part 2', function () {
    it('should return 2 with input 1', function () {
        assert.equal(spiralMem.part2(1),2);
    });
    it('should return 4 with input 2', function () {
        assert.equal(spiralMem.part2(2),4);
    });
    it('should return 23 with input 15', function () {
        assert.equal(spiralMem.part2(15),23);
    });
    it('should return 147 with input 145', function () {
        assert.equal(spiralMem.part2(145),147);
    });
    it('should return 747 with input 500', function () {
        assert.equal(spiralMem.part2(500),747);
    });
    it('should return 349975 with input 347991', function () {
        assert.equal(spiralMem.part2(347991),349975);
    });
});
