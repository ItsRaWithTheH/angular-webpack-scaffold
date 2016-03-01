'use strict';

require('./nav/nav');
require('./layout.scss');

/* @ngInject */
export default angular.module('app.layout', [
  'app.layout.nav'
]);
