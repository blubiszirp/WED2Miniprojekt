/**
 * Created by Frank on 19.11.2015.
 */

define(['app/models/event'], function(Event){
    "use strict"
    return function($scope, $location, EventRepository){
        this.scope = $scope;
        this.scope.event = new Event();
        this.scope.addEvent = function(){
            EventRepository.add($scope.event, function(){
                    $location.path('#/events')
                }
            );
        };
    }
});