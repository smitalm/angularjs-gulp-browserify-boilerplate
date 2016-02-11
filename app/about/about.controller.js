'use strict';

var angularModule = require('./_module');

/**
 * @ngInject
 */
function AboutCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'About module';

}

angularModule.controller('AboutCtrl', AboutCtrl);