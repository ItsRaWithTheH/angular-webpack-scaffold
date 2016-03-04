'use strict';

import angular from 'angular';
import './types/types';
import './wrappers/wrappers';

/* @ngInject */
export default angular.module('app.shared.formly.templates', [
  'app.shared.formly.templates.wrappers',
  'app.shared.formly.templates.types'
]);
