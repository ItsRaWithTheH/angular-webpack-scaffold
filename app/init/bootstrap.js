'use strict';
// load Angular
import angular from 'angular';
// load the main app file
import appModule from 'app/index';
// replaces ng-app="appName"
angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule.name], {
    strictDi: true
  });
});
