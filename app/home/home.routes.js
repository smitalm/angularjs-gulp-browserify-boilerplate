'use strict';

var angularModule = require('./_module');

/**
 * @ngInject
 */
function RouteConfig($stateProvider) {
    $stateProvider
        .state('app.home', {
            url: '/',
            templateUrl: 'home/home.view.html',
            controller: 'HomeCtrl'
        });
}

angularModule.config(RouteConfig);