'use strict';

import angular from 'angular';
// import './helpers/helpers';
import './data/data';
import './formly/formly';

export default angular.module('app.shared', [
  // 'app.shared.helpers',
  'app.shared.formly',
  'app.shared.data'
]);
