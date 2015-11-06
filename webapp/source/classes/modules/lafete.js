define(['frameworks/angular', 'app/controllers/eventListController', 'app/services/storageService', 'app/services/eventFactory', 'libraries/angularRoute'], function (Angular, EventListController, StorageService, EventFactory) {
    'use strict';
    var Lafete = Angular.module('lafete', ['ngRoute']);

    /* services */
    Lafete.service('StorageService', StorageService);
    Lafete.factory('EventFactory', EventFactory);

    /* routing */
    Lafete.config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                controller: 'EventListController',
                templateUrl: './views/list.html'
            })
            .otherwise({
                redirectTo: '/list'
            });
    });

    /* controllers */
    Lafete.controller('EventListController', EventListController);
    EventListController.$inject = ['$scope', 'StorageService'];

    return Lafete;
});
