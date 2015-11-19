define(['frameworks/angular',
        'app/controllers/event/listController',
        'app/controllers/event/detailController',
        'app/controllers/event/addEventController',
        'app/repository/eventRepository',
        'app/services/eventFactory',
        'libraries/angularRoute'],
       function (Angular, EventListController, EventDetailController, AddEventController, EventRepository, EventFactory) {
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

    /* add event */
    Lafete.controller('AddEventController', AddEventController);
    AddEventController.$inject = ['$scope', '$location', 'EventRepository'];

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
            .when('/addEvent', {
                controller: 'AddEventController',
                templateUrl: 'views/event/addEvent.html'
            })
            .otherwise({
                redirectTo: '/events'
            });
    });

    return Lafete;
});
