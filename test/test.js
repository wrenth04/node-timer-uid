var should = require('should');
var timerUid = require('../');

describe('tuid format', function() {
  it('shoud b a string', function() {
    var id = timerUid.tuid();
    should(id).be.a.String();
  }); 

  it('length 20', function() {
    var id = timerUid.tuid();
    should(id.length).equal(20);
  }); 
});

describe('tuid unique', function() {
  it('should different', function() {
    var id = timerUid.tuid();
    var id2 = timerUid.tuid();
    should.notEqual(id, id2);
  }); 

  it('should different after timeout', function(done) {
    var id = timerUid.tuid();

    setTimeout(function() {
      var id2 = timerUid.tuid();
      should.notEqual(id, id2);
      done();
    }, 100);
  }); 
});
