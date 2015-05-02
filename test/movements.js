var assert = require('assert');
var key = process.env.PRIME_KEY;
var Primedice = require('..');

describe("Account movements API", function() {

  it('should return the deposit address', function(done) {
    var test = new Primedice(key);
    test.deposit(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response);
      assert.equal('string', typeof response.address);
      done();
    });
  });

  it('should returns a list of your deposits', function(done) {
    var test = new Primedice(key);
    test.deposits(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response);
      assert.equal(true, Array.isArray(response.deposits));
      done();
    });
  });

  it('should returns a list of your withdrawals', function(done) {
    var test = new Primedice(key);
    test.withdrawals(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response);
      assert.equal(true, Array.isArray(response.withdrawals));
      done();
    });
  });

});

