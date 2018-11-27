const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};
var token = jwt.sign(data, 'secret');
console.log(`token: ${token}`);
var decoded = jwt.verify(token, 'secret');
console.log('decoded', decoded);

// var m = 'Hello!';
// var hash = SHA256(m).toString();
//
// console.log(`Msg: ${m}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: '4'
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'salt').toString()
// };
// var resultHash = SHA256(JSON.stringify(token.data) + 'salt').toString();
