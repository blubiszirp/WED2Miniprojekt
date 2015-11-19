/**
 * Created by Frank on 19.11.2015.
 */

define(['app/models/event'], function(Event){
    "use strict"
    return function($scope, $location, EventRepository){
        this.scope = $scope;
        var event = new Event();
        this.scope.event = event
        this.scope.addEvent = function(){
            //var event = Event.createFromForm($scope);
            EventRepository.add(event, function(){
                    $location.path('#/events')
                }
            );
        };
    }
});