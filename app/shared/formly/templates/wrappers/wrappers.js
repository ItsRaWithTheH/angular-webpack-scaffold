'use strict';

import angular from 'angular';

/* @ngInject */
export default angular.module('app.shared.formly.templates.wrappers', [])
.config((formlyConfigProvider) => {
  formlyConfigProvider.setWrapper([
    {
      name: 'label',
      template: require('./label.html')
    },
    {
      name: 'error',
      template: require('./has-error.html')
    }
  ]);
});
