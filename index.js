'use strict';

var Router = require('react-router');
var transformRoutes = require('./lib/transformRoutes');
var renderRoute = require('./lib/renderRoute');
var defaults = require('lodash.defaults');

module.exports = function(routeObj, opt){
  var options = defaults({}, (opt || {}), {
    location: Router.HistoryLocation
  });
  var routes = transformRoutes(routeObj);

  var router = Router.create({
    routes: routes,
    location: options.location
  });

  // dont confuse people with a start and run, only expose start
  var originalRun = router.run;
  delete router.run;

  router.start = function(renderTarget) {
    return originalRun(renderRoute.bind(null, renderTarget));
  };

  return router;
};

module.exports.Link = Router.Link;
module.exports.ChildView = Router.RouteHandler;
module.exports.mixins = {
  State: Router.State,
  Navigation: Router.Navigation
};
module.exports.locations = {
  History: Router.HistoryLocation,
  Hash: Router.HashLocation,
  Refresh: Router.RefreshLocation
};