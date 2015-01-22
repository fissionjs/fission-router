/* globals window, document */
'use strict';

var should = require('should');
var clone = require('lodash.clone');
var router = require('../');
var sampleRoutes = require('./fixtures/dashboardRoutes');

beforeEach(function(){
  document.body.innerHTML = '';
  window.location.href = '/';
  this.routes = clone(sampleRoutes);
});

afterEach(function(){
  if (this.router) {
    this.router.stop();
    delete this.router;
  }
  delete this.routes;
});

describe('Router()', function() {
  it('should construct a router from a route object', function(done) {
    this.router = router(this.routes);
    should.exist(this.router, 'return value');
    should.exist(this.router.start, 'start fn');
    should.exist(this.router.stop, 'stop fn');
    should.exist(this.router.transitionTo, 'transitionTo fn');
    should.exist(this.router._router, 'hidden var');
    should.exist(this.router.routes, 'computed routes');
    done();
  });
});

describe('Router.start()', function() {
  it('should return the router for chaining', function(done) {
    this.router = router(this.routes);
    this.router.start().should.equal(this.router);
    done();
  });

  it('should render a route to document.body by default', function(done) {
    var container = document.body;
    this.router = router(this.routes).start();
    container.childNodes.length.should.equal(1);
    container.childNodes[0].tagName.should.equal('DIV');
    container.childNodes[0].textContent.should.equal('Test');
    done();
  });

  it('should render a route to custom element if given', function(done) {
    var container = document.createElement('article');
    this.router = router(this.routes).start(container);
    container.childNodes.length.should.equal(1);
    container.childNodes[0].tagName.should.equal('DIV');
    container.childNodes[0].textContent.should.equal('Test');
    done();
  });
});