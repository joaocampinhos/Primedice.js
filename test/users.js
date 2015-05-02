var assert = require('assert');
var key = process.env.PRIME_KEY;
var Primedice = require('..');

describe("Users API", function() {

  it('should return the current authenticated user', function(done) {
    var test = new Primedice(key);
    test.users(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response.user);
      done();
    });
  });

  it('should return the user ash3', function(done) {
    var test = new Primedice(key);
    test.users('ash3', function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response);
      done();
    });
  });

});

