'use strict';

import angular from 'angular';

import './formly-test.scss';
import {FormlyTestService} from './formly-test_service';


/* @ngInject */
class FormlyTestController {
  constructor ($log, formlyTestSvc) {
    this.model = {};
    this.formOptions = {};
    $log.debug('form config', formlyTestSvc.getConfig());
    this.formlyConfig = formlyTestSvc.getConfig();
    this.originalFields = angular.copy(this.formlyConfig.fields);

    this.$log = $log;
  }

  onSubmit () {
    this.$log.debug(this.model);
  }
}

/* @ngInject */
export default angular.module('app.components.formlyTest', [
  'formly'
])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('main.formly', {
      url: 'formly',
      views: {
        '@main.formly': {
          template: require('./formly-test.html'),
          controller: FormlyTestController,
          controllerAs: 'formlyTest',
          bindToController: true
        },
        'layout@main': {
          template: require('app/layout/layout-two-col.html')
        }
      }
    })
  }
])
.service('formlyTestSvc', FormlyTestService);
