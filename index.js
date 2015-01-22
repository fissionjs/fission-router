/*globals document*/

'use strict';

var Router = require('react-router');
var React = require('react');
var transformRoutes = require('./lib/transformRoutes');

/*
TODO: loader?
TODO: detect model and collection views or views with async load
*/
function renderRoute(renderTarget, Component, state){
  console.log(state);
  return React.render(Component(), renderTarget);
}

module.exports = function(cfg){
  var routes = transformRoutes(cfg);

  // TODO: ability to configure this
  var router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
  });

  router.start = function(renderTarget) {
    renderTarget = (renderTarget || document.body);
    return Router.run(renderRoute.bind(null, renderTarget));
  };

  return router;
};

module.exports.Link = Router.Link;
