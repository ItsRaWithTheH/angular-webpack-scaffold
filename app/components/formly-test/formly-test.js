'use strict';

import angular from 'angular';

import './formly-test.scss';
import {FormlyTestService} from './formly-test_service';


/* @ngInject */
class FormlyTestController {
  constructor ($log, formlyTestSvc) {
    $log.info('in state formly');
    $log.info('formlyTestSvc - getConfig', formlyTestSvc.getConfig());

    this.formlyConfig = formlyTestSvc.getConfig();

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
          template: require('./formly-test.html')
        },
        'layout@main': {
          template: require('app/layout/layout-two-col.html')
        }
      },
      controller: FormlyTestController
    })
  }
])
.service('formlyTestSvc', FormlyTestService);
