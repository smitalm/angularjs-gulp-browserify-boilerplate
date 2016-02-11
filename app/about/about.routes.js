'use strict';

var angularModule = require('./_module');

/**
 * @ngInject
 */
function RouteConfig($stateProvider) {
    $stateProvider
        .state('app.about', {
            url: '/about',
            templateUrl: 'about/about.view.html',
            controller: 'AboutCtrl'
        });
}

angularModule.config(RouteConfig);