'use strict';

var gulp    = require('gulp');
var config  = require('../config');

gulp.task('vendor', function () {
    gulp.src(config.vendor.js.src)
        .pipe(gulp.dest(config.vendor.js.dest));
    
    gulp.src(config.vendor.css.src)
        .pipe(gulp.dest(config.vendor.css.dest))
});