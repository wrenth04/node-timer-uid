(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = require('./src/timerUid');

},{"./src/timerUid":2}],2:[function(require,module,exports){
var CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

var lastTimestamp = 0;
var lastRandom = new Array(12);

var timerUid = {
  tuid: function() {
    var now = Date.now();
    var time = [];

    var t = now;
    for(var i = 0 ; i < 8; i++) {
      time.unshift(t % CHARS.length);
      t = Math.floor(t / CHARS.length);
    }

    if(now != lastTimestamp) {
      lastTimestamp = now;
      for(var i = 0 ; i < 12 ; i++) {
        lastRandom[i] = Math.floor(Math.random() * CHARS.length);
      }
    } else {
      for(var i = 11 ; i >= 0 ; i--) {
        if(lastRandom[i] != CHARS.length - 1) {
          lastRandom[i]++;
          break;
        }

        lastRandom[i] = 0;
      }
    }
    
    return time.concat(lastRandom).reduce(function(a, b) {
      return a + CHARS.charAt(b);
    }, '');
  }
};

module.exports = timerUid;


},{}],3:[function(require,module,exports){
window.timerUid = require('.');

},{".":1}]},{},[3]);
