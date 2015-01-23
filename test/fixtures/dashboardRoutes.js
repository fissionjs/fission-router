'use strict';

var React = require('react');
var Router = require('../../');
var ChildView = React.createFactory(Router.ChildView);

var emptyReactComponent = function(name){
  return React.createClass({
    displayName: 'DummyComponent-' + name,
    mixins: [Router.mixins.State],

    render: function(){
      var str = 'Test';
      /*
      if (this.getParams().jobId) {
        str += this.getParams().jobId;
      }
      */
      return React.DOM.div(null, str, ChildView());
    }
  });
};

module.exports = {
  splash: {
    path: '/',
    handler: emptyReactComponent('splash')
  },
  login: {
    path: 'login',
    handler: emptyReactComponent('login')
  },
  home: {
    path: 'home',
    handler: emptyReactComponent('home'),
    children: {
      dashboard: {
        default: true,
        handler: emptyReactComponent('dashboard')
      },
      stats: {
        path: 'analytics',
        handler: emptyReactComponent('stats')
      },
      job: {
        path: 'job/:jobId',
        handler: emptyReactComponent('job')
      }
    }
  }
};