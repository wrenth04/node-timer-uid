var CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

var lastTimestamp = 0;
var lastRandom = new Array(12);

var timerUid = {
  encode: encode,
  decode: decode,
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

function encode(timestamp) {
  var time = [];
  for(var i = 0 ; i < 8; i++) {
    time.unshift(timestamp % CHARS.length);
    timestamp = Math.floor(timestamp / CHARS.length);
  }

  return time.concat(lastRandom).reduce(function(a, b) {
    return a + CHARS.charAt(b);
  }, '');
}

function decode(tuid) {
  if(!tuid || tuid.length < 8) return -1;
  var timestamp = 0;
  var t = tuid.split('');
  for(var i = 0 ; i < 8 ; i++) {
    timestamp = timestamp*CHARS.length + CHARS.indexOf(t[i]);
  }
  return timestamp;
}

module.exports = timerUid;

