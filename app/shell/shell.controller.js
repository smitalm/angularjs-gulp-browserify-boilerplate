'use strict';

var angularModule = require('./_module');

/**
 * @ngInject
 */
function ShellCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}

angularModule.controller('ShellCtrl', ShellCtrl);