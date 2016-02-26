'use strict';

require('angular-ui-router');
require('./services/services');
require('./layout/layout');

module.exports = angular.module('app', [
  'ui.router',
  'app.services',
  'app.layout'
]).config([
  '$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
]);
