'use strict';

var angularModule = require('./_module.js');

/**
 * @ngInject
 */
function exampleDirective() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    }
  };

}
angularModule.directive('exampleDirective', exampleDirective);