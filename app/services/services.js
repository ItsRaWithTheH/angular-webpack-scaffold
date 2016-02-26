'use strict';

var angular = require('angular');
require('./resources/resources');

module.exports = angular.module('app.services', [
  'app.services.resources'
]);
