'use strict';

var request = require('superagent');


/**
 * Initialize a new `Primedice` with the given `accessToken`
 *
 * Example:
 *
 * ```js
 * var Primedice = require('Primedice');
 * var accessToken = 'abc123';
 *
 * var client1 = new Primedice(accessToken);
 *
 * //Can only execute operations that doesn't require authentication
 * var client2 = new Primedice();
 *```
 *
 * @param {String} accessToken
 */

function Primedice(accessToken) {

  this._token = accessToken || "";
  this._uri = 'https://api.primedice.com/api/';

}


/**
 * Get your own info or a user's info with the given `username`
 *
 * Examples:
 *
 * userName's info
 *    Primedice.users('userName', function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * Your own info
 *    Primedice.users(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {String?} userName
 * @param {Function} callback
 */

Primedice.prototype.users = function() {

  var userName;
  var callback;

  if (arguments.length == 1) {
    userName = 1;
    callback = arguments[0];
  }
  else {
    userName = arguments[0];
    callback = arguments[1];
  }

  var url = this._uri + 'users/'+userName+'?api_key=' + this._token;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * **Not Implemented**
 * Register a user
 */

//Primedice.prototype.register = function(){};


/**
 * **Not Implemented**
 * Change password for a user
 */

//Primedice.prototype.password = function(){};


/**
 * **Not Implemented**
 * Enable 2FA for a user
 */

//Primedice.prototype.twofa = function(){};


/**
 * **Not Implemented**
 * Set an email for a user
 */

//Primedice.prototype.email = function(){};


/**
 * **Not Implemented**
 * Set and emergency address for a user
 */

//Primedice.prototype.emergency = function(){};


/**
 * **Not Implemented**
 * Log yourself out
 */

//Primedice.prototype.logout = function(){};


/**
 * **Not Implemented**
 * List your affiliate info
 */

//Primedice.prototype.affiliates = function() {};


/**
 * **Not Implemented**
 * Withdraw your affiliate balance to your main balance
 */

//Primedice.prototype.affiliateWithdraw = function(){};


/**
 * Get your deposit address
 *
 * Example:
 *
 *    Primedice.deposit(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Function} callback
 */

Primedice.prototype.deposit = function(callback) {

  var url = this._uri + 'deposit?api_key=' + this._token;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * Get your deposits
 *
 * Example:
 *
 *    Primedice.deposits(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Function} callback
 */

Primedice.prototype.deposits = function(callback) {

  var url = this._uri + 'deposits?api_key=' + this._token;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * Withdraw an `amount`
 *
 * Example:
 *
 *    //withdraw 100000 (10000 is the transaction fee)
 *    Primedice.withdraw(110000, 'My81tc01N4dDr355', function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Number} amount
 * @param {String} address
 * @param {Function} callback
 */

Primedice.prototype.withdraw = function(amount, address, callback) {

  var url = this._uri + 'withdraw?api_key=' + this._token;

  request.post(url).send('amount='+amount+'&address='+address).end(function(error,response) {
    callback(response.error,response.body);
  });

};


/**
 * Get your withdrawals
 *
 * Example:
 *
 *    Primedice.withdrawals(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Function} callback
 */

Primedice.prototype.withdrawals = function(callback) {

  var url = this._uri + 'withdrawals?api_key=' + this._token;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * Make a bet
 *
 * Example:
 *
 *    //for a bet of 0.00000010 with 2x Payout (Roll under 49.5 to win)
 *    Primedice.bet(10, 49.5, '<', function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Number} amount
 * @param {Number} target
 * @param {String} condition
 * @param {Function} callback
 */

Primedice.prototype.bet = function(amount, target, condition, callback) {

  var url = this._uri + 'bet?api_key=' + this._token;

  request.post(url).send('amount='+amount+'&target='+target+'&condition='+condition).end(function(error,response) {
    callback(response.error,response.body);
  });

};


/**
 * Change your seed
 *
 * Example:
 *
 *    Primedice.seed('533D', function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {String} seed
 * @param {Function} callback
 */

Primedice.prototype.seed = function(seed, callback){

  var url = this._uri + 'seed?api_key=' + this._token;

  request.post(url).send('seed='+seed).end(function(error,response) {
    callback(response.error,response.body);
  });

};


/**
 * Get your last 30 bets
 *
 * Example:
 *
 *    Primedice.mybets(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Function} callback
 */

Primedice.prototype.mybets = function(callback) {

  var url = this._uri + 'mybets?api_key=' + this._token;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * Get last 30 bets of the site or lookup a bet id
 *
 * Examples:
 *
 * 30 bets of the site
 *    Primedice.bets(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * lookup a bet id
 *    Primedice.bets(4800000000, (error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Number?} BetID
 * @param {Function} callback
 */

Primedice.prototype.bets = function(){

  var callback;
  var url;

  if (arguments.length == 1) {
    url = this._uri + 'bets?api_key=' + this._token;
    callback = arguments[0];
  }
  else {
    url = this._uri + 'bets/'+arguments[0]+'?api_key=' + this._token;
    callback = arguments[1];
  }

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * **Not Implemented**
 * Get the last 30 highrollers of the site
 */

//Primedice.prototype.highrollers = function() {};


/**
 * **Not Implemented**
 * Get site statistics
 */

//Primedice.prototype.stats = function() {};


/**
 * **Not Implemented**
 * Tip a user
 */

//Primedice.prototype.tip = function(){};


/**
 * Send a message to a chat room or a PM to a specific user
 *
 * Examples:
 *
 * Send a message to the english chat room
 *    Primedice.send("English", "Hello World!", function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * Send a message to user Visions
 *    Primedice.send("English", "Hello World!", "Visions", function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {String} room
 * @param {String} message
 * @param {String?} toUsername
 * @param {Function} callback
 */

Primedice.prototype.send = function() {

  var room = arguments[0];
  var message = arguments[1];
  var callback;

  var url = this._uri + 'send?api_key=' + this._token;
  var body = 'room='+room+'&message='+message;

  if (arguments.length == 3) {
    callback = arguments[2];
  }
  else {
    body += '&toUsername='+arguments[2];
    callback = arguments[3];
  }

  request.post(url).send(body).end(function(error,response) {
    callback(response.error,response.body);
  });

};


/**
 * Get list of rooms
 *
 * Example:
 *
 *    Primedice.rooms(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Function} callback
 */

Primedice.prototype.rooms = function(callback) {

  var url = this._uri + 'rooms?api_key=' + this._token;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * Get chat messages from a room
 *
 * Examples:
 *
 * No room (defaults to English room)
 *    Primedice.messages(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * Specific room
 *    Primedice.messages('PVP', function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {String?} room
 * @param {Function} callback
 */

Primedice.prototype.messages = function() {

  var room;
  var callback;

  if (arguments.length == 1) {
    callback = arguments[0];
  }
  else {
    room = '&room=' + arguments[0];
    callback = arguments[1];
  }

  var url = this._uri + 'messages?api_key=' + this._token + room;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};



/**
 * Get chat messages from all available rooms
 *
 * Example:
 *
 *    Primedice.allmesages(function(error, response) {
 *      if (!err) console.log(response);
 *    });
 *
 * @param {Function} callback
 */

Primedice.prototype.allmessages = function(callback) {

  var url = this._uri + 'allmessages?api_key=' + this._token;

  request.get(url, function(error, response) {
    callback(response.error,response.body);
  });

};


/**
 * **Not Implemented**
 * Send a PVP challenge
 */

//Primedice.prototype.PVPChallenge = function(){};


/**
 * **Not Implemented**
 * Accept a challenge
 */

//Primedice.prototype.PVPAccept = function(){};


/**
 * **Not Implemented**
 * Get PVP challenges of the site
 */

//Primedice.prototype.challenges = function() {};

module.exports = Primedice;
