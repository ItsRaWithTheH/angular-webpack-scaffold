'use strict';

require('angular-ui-router');
require('./shared/shared');
require('./layout/layout');

module.exports = angular.module('app', [
  'ui.router',
  'app.shared',
  'app.layout'
]).config([
  '$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
]);
