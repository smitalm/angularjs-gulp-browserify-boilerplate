'use strict';

var angular = require('angular');

var configModule = angular.module('app.config', [])
    .constant('config', require('./config'))
    .config(OnConfig);

// @ngInject
function OnConfig($locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

}

module.exports = configModule;