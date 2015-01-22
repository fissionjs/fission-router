'use strict';

var should = require('should');
var sampleRoutes = require('./fixtures/dashboardRoutes');
var router = require('../');

describe('router()', function() {
  it('should construct a router from a route object', function(done) {
    var inst = router(sampleRoutes);
    should.exist(inst);
    should.exist(inst.start);
    done();
  });
});
