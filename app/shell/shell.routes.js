'use strict';

var module = require('./_module');

/**
 * @ngInject
 */
function RouteConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/','/home');
    
    // $stateProvider
    //     .state('app', {
    //         url: '/',
    //         templateUrl: 'shell/shell.view.html',
    //         controller: 'ShellController'
    //     });
}

module.config(RouteConfig);