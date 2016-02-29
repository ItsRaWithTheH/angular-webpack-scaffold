'use strict';

import angular from 'angular';

/**
* @name NavController
* @description Controller to handle view logic for the appNav (app-nav) directive
*/
/* @ngInject */
class NavController {
  constructor ($log) {
    this.$log = $log;
    this.items = ['one', 'two'];
    $log.info(this.items);
  }
}
/* @ngInject */
export default angular.module('app.layout.nav', [])
.directive('appNav', function ($log) {
  require('./nav.scss');
  return {
    resrict: 'E',
    template: require('./nav.html'),
    controller: NavController,
    controllerAs: 'nav',
    bindToController: true,
    link: function (scope, elem, attrs, ctrl) {
      $log.info(scope.nav.items); //works but is clunky
      $log.info(ctrl.items); //better way to access items
    }
  }

});
