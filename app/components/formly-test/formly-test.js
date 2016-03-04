'use strict';

import angular from 'angular';
import _ from 'lodash';

import './formly-test.scss';
import {FormlyTestService} from './formly-test_service';

import deepMerge from 'app/imports/helpers/deep-merge';

/* @ngInject */
class FormlyTestController {
  constructor ($log, formlyTestSvc) {
    this.model = {};
    this.formOptions = {};
    $log.debug('form config', formlyTestSvc.getConfig());
    this.formlyConfig = formlyTestSvc.getConfig();
    // this.formlyConfig.fields = this.overrideFormDisplay(this.formlyConfig.fields);
    $log.debug('form config', this.formlyConfig);
    this.originalFields = angular.copy(this.formlyConfig.fields);


    this.formlyTestSvc = formlyTestSvc;
    this.$log = $log;
  }

  onChangeDisplay () {
    this.$log.info('in change display fn');
    this.formlyConfig.fields = this.overrideFormDisplay(this.formlyConfig.fields);
  }

  overrideFormDisplay (fieldsConfig) {
    let configOverrides = [
      {
        key: 'prop1',
        className: 'flex-2'
      },
      {
        key: 'prop2.subprop1',
        className: 'flex-1'
      },
      {
        key: 'prop2.subprop2',
        className: 'flex-1'
      }
    ];

    return _(fieldsConfig)
    .map(function (field) {
      let override = _.find(configOverrides, {key: field.key});
      if (override) {
        field = deepMerge(field, override);
      }
      return field;
    })
    .tap(function (fields) {
      let idx = 1;

      var groupObj = {
        className: 'display-flex',
        fieldGroup: fields.splice(idx, 2)
      };

      fields.push({
        template: '<br /><h6>Separator</h6><br />'
      })
      fields.push(groupObj);

      return fields;
    })
    .value();
  }

  resetConfig () {
    this.formlyConfig = this.formlyTestSvc.getConfig();
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
