'use strict';

var module = require('./_module');

/**
 * @ngInject
 */
function RouteConfig($stateProvider) {
    $stateProvider
        .state('app.about', {
            url: '/about',
            templateUrl: 'about.view.html',
            controller: 'AboutCtrl'
        });
}

module.config(RouteConfig);