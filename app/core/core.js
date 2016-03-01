'use strict';

import angular from 'angular';

/* @ngInject */
class Core {
  constructor ($log) {
    $log.info('in state main');
  }
}

export default angular.module('app.core', [])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      views: {
        '': {
          template: require('./core.html')
        },
        'layout@main': {
          template: require('app/layout/layout-one-col.html')
        }
      },
      controller: Core
    })
  }
]);
