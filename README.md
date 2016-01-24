# drossel-mongoose
Unnecessary random string generator

[![NPM](https://nodei.co/npm/drossel-random.png)](https://nodei.co/npm/drossel-random/)

## What is this?
"drossel-random" return random string.  
output string range is [A-Za-z0-9].

## Install
```
npm install drossel-random
```

## Usage
```
var drRandom = require('drossel-random');
var length = 10;
var checker = [];
drRandom(length, checker);
```

## Example
### simple
```
drRandom(5) //"xgVbq"
```
```
drRandom(10) //"BwHriGoBe7"
```

### with duplicate check
if you want output a unique string,  
specify the array for duplicate check.
```
var checker = [];
for (var i = 0; i < 3; i++) {
  checker.push(drosselRandom(5, checker));
}
console.log(checker) //["uL9K3", "Fo2PT", "mSk2V"]
```
