'use strict';

var module = require('./_module');

/**
 * @ngInject
 */
function RouteConfig($stateProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            templateUrl: 'home/home.view.html',
            controller: 'HomeCtrl'
        });
}

module.config(RouteConfig);