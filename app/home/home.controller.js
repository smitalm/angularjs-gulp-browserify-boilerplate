'use strict';

var module = require('./_module');

/**
 * @ngInject
 */
function HomeCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}

module.controller('HomeCtrl', HomeCtrl);