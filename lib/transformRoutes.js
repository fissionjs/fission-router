'use strict';

var React = require('react');
var Router = require('react-router');
var clone = require('lodash.clone');
var Route = React.createFactory(Router.Route);
var DefaultRoute = React.createFactory(Router.DefaultRoute);

/*
TODO: onError?
TODO: redirect view
TODO: notfoundroute
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

    var isDefault = !!opt.default;
    var ctor = (isDefault ? DefaultRoute : Route);
    var children = (opt.children ? transformRoutes(opt.children) : null);

    return ctor({
      key: name,
      name: name,
      path: opt.path,
      handler: opt.view
    }, children);
  });
}

module.exports = transformRoutes;