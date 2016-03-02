'use strict';

require('./shared/shared');
require('./layout/layout');
require('./core/core');
require('./components/components');

module.exports = angular.module('app', [
  'ngMessages',
  'ngAria',
  'ui.router',
  'lumx',
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
