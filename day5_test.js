const jump = require('day5');
const assert = require('assert');

describe('maze of trampolines part 1', function () {
    it('should return 1 with input 1', function () {
        assert.equal(jump.part1("1"), 1);
    });

    it('should return 2 with input 0', function () {
        assert.equal(jump.part1("0"), 2);
    });

    it('should return 5 with input 0\n3\n0\n1\n-3', function () {
        assert.equal(jump.part1("0\n3\n0\n1\n-3"), 5);
    });

    it('should return 6 with input 0\n0\n0', function () {
        assert.equal(jump.part1("0\n0\n0"), 6);
    });
});

describe('maze of trampolines part 2', function () {
    it('should return 1 with input 1', function () {
        assert.equal(jump.part1("1"), 1);
    });

    it('should return 2 with input 0', function () {
        assert.equal(jump.part1("0"), 2);
    });

    it('should return 10 with input 0\n3\n0\n1\n-3', function () {
        assert.equal(jump.part1("0\n3\n0\n1\n-3"), 10);
    });

    it('should return 6 with input 0\n0\n0', function () {
        assert.equal(jump.part1("0\n0\n0"), 6);
    });

    it('should return 7 with input 3\n3\n3\n0\n-3', function () {
        assert.equal(jump.part1("3\n3\n3\n0\n-3"), 7);
    });
});
