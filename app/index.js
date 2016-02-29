'use strict';

require('angular-ui-router');
require('./shared/shared');
require('./layout/layout');

module.exports = angular.module('app', [
  'ui.router',
  'app.shared',
  'app.layout',

  'app.core',
  'app.componenets'
]).config([
  '$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/'); //TODO: move out of main index.js and into core module
  }
]);
