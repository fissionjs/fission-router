'use strict';

var React = require('react');
var Router = require('react-router');
var clone = require('lodash.clone');
var Route = React.createFactory(Router.Route);
var DefaultRoute = React.createFactory(Router.DefaultRoute);
var NotFoundRoute = React.createFactory(Router.NotFoundRoute);

/*
TODO: onError?
TODO: redirect view
TODO: prerender/caching of views
TODO: conditional route mapping?
*/

function transformRoutes(routes) {
  if (typeof routes !== 'object') {
    throw new Error('Invalid route config');
  }
  var config = clone(routes);

  return Object.keys(config).map(function(name){
    var opt = config[name];
    // sugar for specifying fn
    if (typeof opt === 'function') {
      opt = {
        view: opt
      };
    } else if (typeof opt !== 'object') {
      throw new Error('Invalid route config for ' + name);
    }

    var defaultRoute = opt.defaultChild ? DefaultRoute({
      key: (opt.defaultChild.key || name + 'Default'),
      name: (opt.defaultChild.name || name + 'Default'),
      handler: opt.defaultChild.view
    }) : null;

    var notFoundRoute = opt.childNotFound ? NotFoundRoute({
      key: (opt.childNotFound.key || name + 'NotFound'),
      name: (opt.childNotFound.name || name + 'NotFound'),
      handler: opt.childNotFound.view
    }) : null;

    var children = (opt.children ? transformRoutes(opt.children) : []);
    if (defaultRoute) {
      children.push(defaultRoute);
    }
    if (notFoundRoute) {
      children.push(notFoundRoute);
    }
    return Route({
      key: name,
      name: name,
      path: opt.path,
      handler: opt.view
    }, children);
  });
}

module.exports = transformRoutes;