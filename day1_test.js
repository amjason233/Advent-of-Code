const captcha  = require('day1');
const assert = require('assert');

describe('captcha part 1', function () {
  it('should return 2 when the input is 11', function () {
    assert.equal(captcha.captcha("11", 1), 2);
  });
  it('should return 0 when the input is 1212', function () {
    assert.equal(captcha.captcha("1212", 1), 0);
  });
  it('should return 0 when the input is 123456', function () {
    assert.equal(captcha.captcha("123456", 1), 0);
  });
  it('should return 3 when the input is 1122', function () {
    assert.equal(captcha.captcha("1122", 1), 3);
  });
  it('should return 9 when the input is 91212129', function () {
    assert.equal(captcha.captcha("91212129", 1), 9);
  });
  it('should return 35 when the input is 5555555', function () {
    assert.equal(captcha.captcha("5555555", 1), 35);
  });
});

describe('captcha part 2', function () {
  it('should return 2 when the input is 11', function () {
    assert.equal(captcha.captcha("11", 1), 2);
  });
  it('should return 6 when the input is 1212', function () {
    assert.equal(captcha.captcha("1212", 2), 6);
  });
  it('should return 0 when the input is 1221', function () {
    assert.equal(captcha.captcha("1221", 2), 0);
  });
  it('should return 4 when the input is 123425', function () {
    assert.equal(captcha.captcha("123425", 3), 4);
  });
  it('should return 12 when the input is 123123', function () {
    assert.equal(captcha.captcha("123123", 3), 12);
  });
  it('should return 4 when the input is 12131415', function () {
    assert.equal(captcha.captcha("12131415", 4), 4);
  });
 });
