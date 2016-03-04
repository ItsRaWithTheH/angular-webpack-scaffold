'use strict';

import angular from 'angular';
import './data/data';
import './formly/formly';

export default angular.module('app.shared', [
  'app.shared.formly',
  'app.shared.data'
]);
