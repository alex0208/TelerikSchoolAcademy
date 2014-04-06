require.config({

    paths: {
        angular: 'lib/angular/angular',
        angularRoute: 'lib/angular/angular-route',
        underscore: 'lib/underscore/underscore'
    }
});

window.name = "NG_DEFER_BOOTSTRAP!";

require(['app', 'angular'],
    function (app) {
        'use strict';

        var $html = angular.element(document.getElementsByTagName('html')[0]);

        angular.element().ready(function () {
            angular.resumeBootstrap(['application']);
        });
    });