define(['frameworks/angular',
        'app/controllers/eventListController',
        'app/controllers/eventDetailController',
        'app/services/storageService',
        'app/services/eventFactory',
        'libraries/angularRoute'],
       function (Angular, EventListController, EventDetailController, StorageService, EventFactory) {
    'use strict';
    var Lafete = Angular.module('lafete', ['ngRoute']);

    /* services */
    Lafete.service('StorageService', StorageService);
    Lafete.factory('EventFactory', EventFactory);

    /* routing */
    Lafete.config(function($routeProvider) {
        $routeProvider
            .when('/events', {
                controller: 'EventListController',
                templateUrl: './views/event/list.html'
            })
            .when('/events/:eventId', {
                controller: 'EventDetailController',
                templateUrl: './views/event/detail.html'
            })
            .otherwise({
                redirectTo: '/events'
            });
    });

    /* controllers */
    /* event list */
    Lafete.controller('EventListController', EventListController);
    EventListController.$inject = ['$scope', 'StorageService'];

    /* event detail */
    Lafete.controller('EventDetailController', EventDetailController);
    EventDetailController.$inject = ['$scope', '$routeParams', 'StorageService'];

    return Lafete;
});
