'use strict';

import angular from 'angular';
import './templates/templates';

export default angular.module('app.shared.formly', [
  'formly',
  'app.shared.formly.templates'
]);
