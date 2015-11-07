define([], function(Event) {
    'use strict';

    var EventListController = function($scope, eventRepository) {
        this.scope = $scope;
        this.scope.events = eventRepository.events;
    }

    return EventListController;
});
