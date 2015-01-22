'use strict';

var should = require('should');
var noop = require('node-noop').noop;
var router = require('../');

var sampleRoutes = {
  login: {
    path: 'login',
    handler: noop
  },
  home: {
    path: 'home',
    handler: noop,
    children: {
      dashboard: {
        default: true,
        handler: noop
      },
      stats: {
        path: 'analytics',
        handler: noop
      }
    }
  }
};

describe('router()', function() {
  it('should construct a router from a route object', function(done) {
    var inst = router(sampleRoutes);
    should.exist(inst);
    should.exist(inst.start);
    done();
  });
});
