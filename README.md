# node-timer-uid [![Build Status](https://travis-ci.org/wrenth04/node-timer-uid.svg?branch=master)](https://travis-ci.org/wrenth04/node-timer-uid)
timestamp unique identifier generator 

## About tuid
- `tuid` is 20 digits identifier include 8 digits timestamp and 12 random digits.
- `tuid` is URL safely.
- porting from [Firebase](https://www.firebase.com/) `pushKeyGenerator()`.

## Installation
```
  npm install timer-uid
```

## Quick Example
```js
var timerUid = require('timer-uid');
var tuid = timerUid.tuid();

console.log(tuid);
```
