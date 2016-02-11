'use strict';

var angularModule = require('./_module');

/**
 * @ngInject
 */
function RouteConfig($stateProvider) {
    $stateProvider
        .state('app', {
            url: '',
            templateUrl: 'shell/shell.view.html',
            controller: 'ShellCtrl'
        });
}

angularModule.config(RouteConfig);