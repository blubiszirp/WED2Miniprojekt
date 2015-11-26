/**
 * Created by Frank on 19.11.2015.
 */

define(['app/models/event'], function(Event){
    "use strict"
    return function($scope, $location, $routeParams, EventRepository){
        this.scope = $scope;

        var eventId = $routeParams.eventId;
        this.scope.event = EventRepository.get(eventId,function(event){
            this.scope.event = event;
        }.bind(this));


        this.scope.update = function(){
            EventRepository.update($scope.event, function(){
                    $location.path('/events')
                }
            );
        };

    }
});