'use strict';

import angular from 'angular';

export default angular.module('app.services.helpers', [])
.constant('deepMerge', () => {
  var objectPrototype = Object.getPrototypeOf({});
  var arrayPrototype = Object.getPrototypeOf([]);

  return deepMerge;

  function deepMerge() {
    var res = arguments[0];
    angular.forEach(arguments, function (src, index) {
      if (src && (index > 0 || false)) {
        angular.forEach(src, function (val, prop) {
          if (typeof val === "object" && val !== null && isObjectOrArrayLike(val)) {
            var deepRes = res[prop];
            if (!deepRes && Array.isArray(val)) {
              deepRes = [];
            } else if (!deepRes) {
              deepRes = {};
            }
            res[prop] = deepMerge()(deepRes, val);
          } else {
            res[prop] = val;
          }
        });
      }
    });
    return res;
  }

  function isObjectOrArrayLike(val) {
    var proto = Object.getPrototypeOf(val);
    return proto === objectPrototype || proto === arrayPrototype;
  }
});
