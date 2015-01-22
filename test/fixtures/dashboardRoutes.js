'use strict';

var React = require('react');
var Router = require('../../');
var ChildView = React.createFactory(Router.ChildView);

var emptyReactComponent = React.createClass({
  displayName: 'DummyComponent',
  mixins: [Router.mixins.State],

  render: function(){
    return React.DOM.div(null, 'Test', ChildView());
  }
});

module.exports = {
  splash: {
    path: '/',
    handler: emptyReactComponent
  },
  login: {
    path: 'login',
    handler: emptyReactComponent
  },
  home: {
    path: 'home',
    handler: emptyReactComponent,
    children: {
      dashboard: {
        default: true,
        handler: emptyReactComponent
      },
      stats: {
        path: 'analytics',
        handler: emptyReactComponent
      },
      job: {
        path: 'job/:jobId',
        handler: emptyReactComponent
      }
    }
  }
};