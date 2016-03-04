'use strict';

import angular from 'angular';

/* @ngInject */
export default angular.module('app.shared.formly.templates.types', [])
.config((formlyConfigProvider) => {
  formlyConfigProvider.setType([
    {
      name: 'input',
      template: require('./input.html'),
      wrapper: ['label', 'error']
    }
  ]);
});
