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
  var toRender = React.createElement(Component, state.params);
  return React.render(toRender, renderTarget);
}

module.exports = function(cfg){
  var routes = transformRoutes(cfg);

  // TODO: ability to configure this
  var _router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
  });

  var router = {
    _router: _router,
    routes: routes,
    start: function(renderTarget) {
      renderTarget = (renderTarget || document.body);
      _router.run(renderRoute.bind(null, renderTarget));
      return router;
    },
    stop: _router.stop,
    transitionTo: _router.transitionTo
  };

  return router;
};

module.exports.Link = Router.Link;
