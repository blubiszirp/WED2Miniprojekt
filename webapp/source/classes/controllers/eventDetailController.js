define([], function(Event) {
    'use strict';

    var EventDetailController = function($scope, $routeParams, eventRepository) {
        this.scope = $scope;

        var eventId = $routeParams.eventId;
        this.scope.event = eventRepository.events.get(eventId);
    }

    return EventDetailController;
});
