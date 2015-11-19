define([], function() {
    'use strict';

    var EventDetailController = function($scope, $routeParams, eventRepository) {
        this.scope = $scope;

        var eventId = $routeParams.eventId;
        this.scope.event = eventRepository.get(eventId,function(event){
            this.scope.event = event;
        }.bind(this));
    }

    return EventDetailController;
});
