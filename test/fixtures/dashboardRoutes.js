var noop = require('node-noop').noop;

module.exports = {
  login: {
    path: 'login',
    handler: noop
  },
  home: {
    path: 'home',
    handler: noop,
    children: {
      dashboard: {
        default: true,
        handler: noop
      },
      stats: {
        path: 'analytics',
        handler: noop
      },
      job: {
        path: 'job/:jobId',
        handler: noop
      }
    }
  }
};