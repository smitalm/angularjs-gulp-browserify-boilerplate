'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    require('./config/_module').name,
    require('./common/_module').name,
    require('./about/_module').name,
    require('./home/_module').name,
    require('./shell/_module').name
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.bootstrap(document, ['app']);

});