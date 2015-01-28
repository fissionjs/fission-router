'use strict';

var React = require('react');

/*
TODO: loader?
TODO: detect model and collection views or views with async load
*/

function renderRoute(renderTarget, Component){
  var toRender = React.createElement(Component);
  return React.render(toRender, renderTarget);
}

module.exports = renderRoute;