'use strict';

// require('angular-ui-router');
require('./nav/nav');
require('./layout.scss');

export default angular.module('app.layout', [
  'app.layout.nav'
]).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: require('./layout.html'),
      controller: function ($log) { $log.info('in state main'); }
    })
  }
]);
