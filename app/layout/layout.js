'use strict';

// require('angular-ui-router');
require('./nav/nav');
require('./layout.scss');

/* @ngInject */
class Layout {
  constructor ($log) {
    $log.info('in state main');
  }
}

/* @ngInject */
export default angular.module('app.layout', [
  'app.layout.nav'
]).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: require('./layout.html'),
      controller: Layout
    })
  }
]);
