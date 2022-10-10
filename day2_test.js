const checksum  = require('day2');
const assert = require('assert');

const test_1 = '5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8';
const test_2 = '1\t2\t3\t4';
const test_3 = '1\t1\t1\t1\t1';
const test_4 = '5\t9\t2\t8\n9\t4\t7\t3\n3\t7\t6\t5';
describe('checksum part 1', function () {
    it('should return 18 with input 1', function () {
      assert.equal(checksum.findSum(test_1, checksum.findDifference), 18);
    });
    it('should return 3 with input 2', function () {
      assert.equal(checksum.findSum(test_2, checksum.findDifference), 3);
    });
    it('should return 0 with input 3', function () {
        assert.equal(checksum.findSum(test_3, checksum.findDifference), 0);
    });
    it('should return 17 with input 4', function () {
        assert.equal(checksum.findSum(test_4, checksum.findDifference), 17);
    });
  });

describe('checksum part 2', function () {
    it('should return 18 with input 1', function () {
        assert.equal(checksum.findSum(test_1, checksum.isDivisible), 18);
    });
    it('should return 2 with input 2', function () {
        assert.equal(checksum.findSum(test_2, checksum.isDivisible), 2);
    });
    it('should return 9 with input 4', function () {
        assert.equal(checksum.findSum(test_4, checksum.isDivisible), 9);
    });
});
