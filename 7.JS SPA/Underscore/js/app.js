define(
    [
        'underscore',
        'angular',
        'services',
        'controllers',
        'angularRoute',

    ],

    function (underscore) {
        'use strict';

        return angular.module('application', ['ngRoute', 'app.services', 'app.controllers'])
            .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/task-1', {
                    templateUrl: 'js/app/views/scenarios/task-1.html',
                    controller: 'Task1Controller'
                })
                .when('/task-2', {
                    templateUrl: 'js/app/views/scenarios/task-1.html',
                    controller: 'Task2Controller'
                })
                .when('/task-3', {
                    templateUrl: 'js/app/views/scenarios/task-3.html',
                    controller: 'Task3Controller'
                })
                .when('/task-4', {
                    templateUrl: 'js/app/views/scenarios/task-4.html',
                    controller: 'Task4Controller'
                })
                .when('/task-5', {
                    templateUrl: 'js/app/views/scenarios/task-5.html',
                    controller: 'Task5Controller'
                })
                .when('/task-6', {
                    templateUrl: 'js/app/views/scenarios/task-6.html',
                    controller: 'Task6Controller'
                })
                .when('/task-7', {
                    templateUrl: 'js/app/views/scenarios/task-7.html',
                    controller: 'Task7Controller'
                })
                .otherwise({
                    redirectTo: '/task-1',
                    controller: 'Task1Controller'
                });
        }])
            .run(['$rootScope', 'dataService', function ($rootScope, dataService) {
                $rootScope.tasks = dataService.tasks;
            }]);
});