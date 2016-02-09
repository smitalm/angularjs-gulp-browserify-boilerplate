'use strict';

var module = require('./_module');

/**
 * @ngInject
 */
function AboutCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'About module';

}

module.controller('AboutCtrl', AboutCtrl);