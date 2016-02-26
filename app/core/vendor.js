module.exports = function () {
  /* Styles */
  require('../index.scss');
  require('../pigments/pigments.scss'); //replace with external pigments after
  /* JS */
  global._ = require('lodash');
  global.$ = global.jQuery = require('jquery');
  require('velocity-animate');
  require('angular');
  global.moment = require('moment');
};
