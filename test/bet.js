var assert = require('assert');
var key = process.env.PRIME_KEY;
var Primedice = require('..');

describe("Bet API", function() {

  it('should return a list of your last 30 bets', function(done) {
    var test = new Primedice(key);
    test.mybets(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response);
      assert.equal(true, Array.isArray(response.mybets));
      done();
    });
  });

  it('should return a list with the last 30 bets of the site', function(done) {
    var test = new Primedice(key);
    test.bets(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response);
      assert.equal(true, Array.isArray(response.bets));
      done();
    });
  });

  it('should return the bet #4800000000', function(done) {
    var test = new Primedice(key);
    test.bets(4800000000, function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response.bet);
      done();
    });
  });

});

