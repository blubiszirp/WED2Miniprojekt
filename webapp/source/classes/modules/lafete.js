define(['frameworks/angular',
        'app/controllers/eventListController',
        'app/controllers/eventDetailController',
        'app/repository/eventRepository',
        'app/services/eventFactory',
        'libraries/angularRoute'],
       function (Angular, EventListController, EventDetailController, EventRepository, EventFactory) {
    'use strict';
    var Lafete = Angular.module('lafete', ['ngRoute']);

    /* services */
    EventRepository.$inject = ['$http'];
    Lafete.service('EventRepository', EventRepository);
    Lafete.factory('EventFactory', EventFactory);

    /* controllers */
    /* event list */
    Lafete.controller('EventListController', EventListController);
    EventListController.$inject = ['$scope', 'EventRepository'];

    /* event detail */
    Lafete.controller('EventDetailController', EventDetailController);
    EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository'];

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

    return Lafete;
});
