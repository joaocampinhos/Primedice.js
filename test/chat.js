var assert = require('assert');
var key = process.env.PRIME_KEY;
var Primedice = require('..');

describe("Chat API", function() {

  it('should return a list of available rooms', function(done) {
    var test = new Primedice(key);
    test.rooms(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response.rooms);
      done();
    });
  });

  it('should return the chat messages from the "English" room', function(done) {
    var test = new Primedice(key);
    test.messages('English', function(error, response) {
      assert.ifError(error);
      assert.equal(true, Array.isArray(response.messages));
      done();
    });
  });

  it('should return chat messages from all rooms', function(done) {
    var test = new Primedice(key);
    test.allmessages(function(error, response) {
      assert.ifError(error);
      assert.equal('object', typeof response.rooms);
      done();
    });
  });

});

