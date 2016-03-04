'use strict';

import forEach from 'lodash/forEach';

const objectPrototype = Object.getPrototypeOf({});
const arrayPrototype = Object.getPrototypeOf([]);

export default deepMerge;

function deepMerge() {
  var res = arguments[0];
  console.log('arguments', arguments);
  forEach(arguments, function (src, index) {
    if (src && (index > 0 || false)) {
      forEach(src, function (val, prop) {
        if (typeof val === "object" && val !== null && isObjectOrArrayLike(val)) {
          var deepRes = res[prop];
          if (!deepRes && Array.isArray(val)) {
            deepRes = [];
          } else if (!deepRes) {
            deepRes = {};
          }
          res[prop] = deepMerge(deepRes, val);
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
