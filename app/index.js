'use strict';

require('angular-ui-router');
require('./shared/shared');
require('./layout/layout');
require('./core/core');
require('./components/components');

module.exports = angular.module('app', [
  'ui.router',
  'app.shared',
  'app.layout',

  'app.core',
  'app.components'
]).config([
  '$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/'); //TODO: move out of main index.js and into core module
  }
]);
