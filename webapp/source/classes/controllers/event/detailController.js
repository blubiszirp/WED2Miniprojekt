define([], function() {
    'use strict';

    var EventDetailController = function($scope, $routeParams, EventRepository) {
        this.scope = $scope;

        var eventId = $routeParams.eventId;
        this.scope.event = EventRepository.get(eventId,function(event){
            this.scope.event = event;
        }.bind(this));
    }

    return EventDetailController;
});
