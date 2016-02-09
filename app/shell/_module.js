'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.shell', []);

bulk(__dirname, ['./**/!(*_module|*.spec).js']);