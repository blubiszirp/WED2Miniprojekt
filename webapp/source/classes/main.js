/**
 * Created by Frank on 22.10.2015.
 */

require.config({

    baseUrl: './',
    paths: {
        'frameworks/angular': 'frameworks/angular/angular.min',
        'app': 'classes'
    },

    shim: {
        'frameworks/angular': {
            exports: 'angular'
        }
    }
});

define(['frameworks/angular', 'app/modules/lafete'], function (Angular, Lafete) {
    Angular.element(document).ready(function() {
        Angular.bootstrap(document, [Lafete.name]);
    });
});