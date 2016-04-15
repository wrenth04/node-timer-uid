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
      lastTimestamp = t;
      for(var i = 0 ; i < 12 ; i++) {
        lastRandom[i] = Math.floor(Math.random() * CHARS.length);
      }
    } else {
      for(var i = 11 ; i >= 0 ; i--) {
        if(lastRandom[i] != CHARS.length) {
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

