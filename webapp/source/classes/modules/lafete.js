define(['frameworks/angular',
        'app/controllers/event/listController',
        'app/controllers/event/detailController',
        'app/controllers/event/addEventController',
        'app/controllers/event/editEventController',
        'app/controllers/guest/guestListController',
        'app/controllers/guest/addGuestController',
        'app/controllers/guest/editGuestController',
        'app/repository/eventRepository',
        'app/repository/guestRepository',
        'app/services/eventFactory',
        'libraries/angularRoute'],
       function (Angular,
                 EventListController,
                 EventDetailController,
                 AddEventController,
                 EditEventController,
                 GuestListController,
                 AddGuestController,
                 EditGuestController,
                 EventRepository,
                 GuestRepository,
                 EventFactory) {
    'use strict';
    var Lafete = Angular.module('lafete', ['ngRoute']);

    /* services */
    EventRepository.$inject = ['$http'];
    GuestRepository.$inject = ['$http'];
    Lafete.service('EventRepository', EventRepository);
    Lafete.service('GuestRepository', GuestRepository);
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

    /* edit event */
    Lafete.controller('EditEventController', EditEventController);
    EditEventController.$inject = ['$scope', '$location', '$routeParams', 'EventRepository'];

    /* guest list */
    Lafete.controller('GuestListController', GuestListController);
    GuestListController.$inject = ['$scope', '$routeParams', 'GuestRepository'];

    /* add guest */
    Lafete.controller('AddGuestController', AddGuestController);
    AddGuestController.$inject = ['$scope', '$location', '$routeParams', 'GuestRepository'];

    /* add guest */
    Lafete.controller('EditGuestController', EditGuestController);
    EditGuestController.$inject = ['$scope', '$location', '$routeParams', 'GuestRepository'];

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
            .when('/editEvent/:eventId', {
                controller: 'EditEventController',
                templateUrl: 'views/event/editEvent.html'
            })
            .when('/events/:eventId/guests', {
                controller: 'GuestListController',
                templateUrl: 'views/guest/list.html'
            })
            .when('/events/:eventId/addGuest', {
                controller: 'AddGuestController',
                templateUrl: 'views/guest/addGuest.html'
            })
            .when('/events/:eventId/editGuest/:guestId', {
                controller: 'EditGuestController',
                templateUrl: 'views/guest/editGuest.html'
            })
            .otherwise({
                redirectTo: '/events'
            });
    });

    return Lafete;
});
