define([], function(Event) {
    'use strict';

    var EventDetailController = function($scope, $routeParams, storageService) {
        this.scope = $scope;

        var eventId = $routeParams.eventId;
        this.scope.event = storageService.events.get(eventId);
    }

    return EventDetailController;
});
