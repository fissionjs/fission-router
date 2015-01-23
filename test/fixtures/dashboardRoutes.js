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
    view: emptyReactComponent('splash')
  },
  login: {
    path: 'login',
    view: emptyReactComponent('login')
  },
  logout: emptyReactComponent('logout'),
  home: {
    path: 'home',
    view: emptyReactComponent('home'),
    children: {
      dashboard: {
        default: true,
        view: emptyReactComponent('dashboard')
      },
      stats: {
        path: 'analytics',
        view: emptyReactComponent('stats')
      },
      job: {
        path: 'job/:jobId',
        view: emptyReactComponent('job')
      }
    }
  }
};