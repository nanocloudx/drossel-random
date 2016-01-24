'use strict';

// output string range
var _str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function drosselRandom(length, check) {
  if (typeof length !== 'number' || length < 1) {
    throw new Error('drossel-random: require number argument (1 or more).');
  }
  var result;
  var safety = 100; //if collision check failure, will retry up to 100 times.
  do {
    safety--;
    result = '';
    for (var i = 0; i < length; i++) {
      result += _str[Math.floor(Math.random() * 62)]; //62 == _str.length
    }
  } while (!!check && check.indexOf(result) !== -1 && safety > 0);
  if (safety <= 0) {
    throw new Error('drossel-random: length is too short.');
  }
  return result;
}

module.exports = drosselRandom;
