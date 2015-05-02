# Node Primedice
Node.js library for accessing [Primedice's API](https://primedice.com/api)

## Instalation

Install with the Node.js package manager [npm](http://npmjs.org):

```bash
npm install --save primedice
```

## API

### Primedice(accessToken:String)

  Initialize a new `Primedice` with the given `accessToken`

  Example:

  ```js
  var Primedice = require('Primedice');
  var accessToken = 'abc123';

  var client1 = new Primedice(accessToken);

  //Can only execute operations that doesn't require authentication
  var client2 = new Primedice();
  ```

### Primedice.users(userName:String, callback:Function)

  Get your own info or a user's info with the given `username`

  Examples:

  userName's info
```js
 Primedice.users('userName', function(error, response) {
   if (!err) console.log(response);
 });
```


  Your own info
```js
 Primedice.users(function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.deposit(callback:Function)

  Get your deposit address

  Example:

```js
 Primedice.deposit(function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.deposits(callback:Function)

  Get your deposits

  Example:

```js
 Primedice.deposits(function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.withdraw(amount:Number, address:String, callback:Function)

  Withdraw an `amount`

  Example:

```js
 //withdraw 100000 (10000 is the transaction fee)
 Primedice.withdraw(110000, 'My81tc01N4dDr355', function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.withdrawals(callback:Function)

  Get your withdrawals

  Example:

```js
 Primedice.withdrawals(function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.bet(amount:Number, target:Number, condition:String, callback:Function)

  Make a bet

  Example:

```js
 //for a bet of 0.00000010 with 2x Payout (Roll under 49.5 to win)
 Primedice.bet(10, 49.5, '<', function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.seed(seed:String, callback:Function)

  Change your seed

  Example:

```js
 Primedice.seed('533D', function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.mybets(callback:Function)

  Get your last 30 bets

  Example:

```js
 Primedice.mybets(function(error, response) {
   if (!err) console.log(response);
 });
```

### Primedice.bets(BetID:Number, callback:Function)

  Get last 30 bets of the site or lookup a bet id

  Examples:

  30 bets of the site
```js
 Primedice.bets(function(error, response) {
   if (!err) console.log(response);
 });
```


  lookup a bet id
```js
 Primedice.bets(4800000000, (error, response) {
   if (!err) console.log(response);
 });
```
