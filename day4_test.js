const passphrase = require('../day4/day4-amanda');
const assert = require('assert');

describe('high-entropy passphrases part 1', function () {
    it('should return 1 with input a', function () {
        assert.equal(passphrase.count("a", passphrase.part1), 1);
    });

    it('should return 0 with input a a', function () {
        assert.equal(passphrase.count("a a", passphrase.part1), 0);
    });

    it('should return 2 with input a\nb', function () {
        assert.equal(passphrase.count("a\nb", passphrase.part1), 2);
    });

    it('should return 2 with input a\na', function () {
        assert.equal(passphrase.count("a\na", passphrase.part1), 2);
    });

    it('should return 2 with input ab\nba', function () {
        assert.equal(passphrase.count("ab\nba", passphrase.part1), 2);
    });

    it('should return 0 with input ab ab', function () {
        assert.equal(passphrase.count("ab ab", passphrase.part1), 0);
    });
});

describe('high-entropy passphrases part 2', function () {
    it('should return 1 with input a', function () {
        assert.equal(passphrase.count("a", passphrase.part2), 1);
    });

    it('should return 0 with input a a', function () {
        assert.equal(passphrase.count("a a", passphrase.part2), 0);
    });

    it('should return 2 with input a\nb', function () {
        assert.equal(passphrase.count("a\nb", passphrase.part2), 2);
    });

    it('should return 2 with input a\na', function () {
        assert.equal(passphrase.count("a\na", passphrase.part2), 2);
    });

    it('should return 2 with input ab\nba', function () {
        assert.equal(passphrase.count("ab\nba", passphrase.part2), 2);
    });

    it('should return 0 with input ab\nba', function () {
        assert.equal(passphrase.count("ab ba", passphrase.part2), 0);
    });

    it('should return 0 with input ab ab', function () {
        assert.equal(passphrase.count("ab ab", passphrase.part2), 0);
    });
});
