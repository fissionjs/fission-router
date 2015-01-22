'use strict';

var should = require('should');
var clone = require('lodash.clone');
var router = require('../');
var sampleRoutes = require('./fixtures/dashboardRoutes');

beforeEach(function(){
  window.location.href = '/';
  this.container = document.createElement('article');
  this.routes = clone(sampleRoutes);
});

afterEach(function(){
  if (this.router) {
    this.router.stop();
    delete this.router;
  }
  delete this.container;
  delete this.routes;
});

describe('Router()', function() {
  it('should expose the right attributes', function(done){
    should.exist(router);
    should.exist(router.ChildView, 'childview');
    should.exist(router.Link, 'link');
    should.exist(router.mixins, 'mixins');
    should.exist(router.mixins.Navigation, 'navigation mixin');
    should.exist(router.mixins.State, 'state mixin');
    done();
  });

  it('should construct a router from a route object', function(done) {
    this.router = router(this.routes);
    should.exist(this.router, 'return value');
    should.exist(this.router.start, 'start fn');
    should.exist(this.router.stop, 'stop fn');
    should.exist(this.router.transitionTo, 'transitionTo fn');
    should.exist(this.router.replaceWith, 'replaceWith fn');
    should.exist(this.router._router, 'hidden var');
    should.exist(this.router.routes, 'computed routes');
    done();
  });
});

describe('Router.start()', function() {
  it('should return the router for chaining', function(done) {
    this.router = router(this.routes);
    this.router.start(this.container).should.equal(this.router);
    done();
  });

  it('should render a route', function(done) {
    this.router = router(this.routes);
    this.router.replaceWith('/');
    this.router.start(this.container);

    this.container.childNodes.length.should.equal(1);
    this.container.childNodes[0].tagName.should.equal('DIV');
    this.container.childNodes[0].textContent.should.equal('Test');
    done();
  });

  it('should render a nested route', function(done) {
    this.router = router(this.routes);
    this.router.replaceWith('/home/analytics');
    this.router.start(this.container);

    var firstContainerNode = this.container.childNodes[0];
    var firstTextNode = firstContainerNode.childNodes[0];
    var secondContainerNode = firstContainerNode.childNodes[1];
    var secondTextNode = secondContainerNode.childNodes[0];

    firstContainerNode.tagName.should.equal('DIV');
    firstTextNode.tagName.should.equal('SPAN');
    firstTextNode.textContent.should.equal('Test');

    secondContainerNode.tagName.should.equal('DIV');
    secondTextNode.tagName.should.equal('SPAN');
    secondTextNode.textContent.should.equal('Test');

    done();
  });
});