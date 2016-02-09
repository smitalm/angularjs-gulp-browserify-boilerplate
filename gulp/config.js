'use strict';

module.exports = {

    'browserPort': 3000,
    'UIPort': 3001,
    'serverPort': 3002,

    'vendor': {
        'css': {
            'src': [],
            'dest': 'dist/css/vendor.css'
        },
        'js': {
            'src': [],
            'dest': 'dist/js/vendor.js'
        }
    },

    'styles': {
        'src': 'app/**/*.scss',
        'dest': 'dist/css',
        'prodSourcemap': false,
        'sassIncludePaths': []
    },

    'scripts': {
        'src': 'app/**/*.js',
        'dest': 'dist/js'
    },

    'images': {
        'src': 'app/assets/images/**/*',
        'dest': 'dist/images'
    },

    'fonts': {
        'src': ['app/assets/fonts/**/*'],
        'dest': 'dist/fonts'
    },

    'views': {
        'watch': [
            'app/index.html',
            'app/**/*.html'
        ],
        'src': 'app/**/!(*index).html',
        'dest': 'app'
    },

    'gzip': {
        'src': 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
        'dest': 'dist/',
        'options': {}
    },

    'dist': {
        'root': 'dist'
    },

    'browserify': {
        'entries': ['./app/main.js'],
        'bundleName': 'main.js'
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js'
    }

};
