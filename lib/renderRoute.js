'use strict';

var React = require('react');

function renderRoute(renderTarget, Component){
  var toRender = React.createElement(Component);
  return React.render(toRender, renderTarget);
}

module.exports = renderRoute;