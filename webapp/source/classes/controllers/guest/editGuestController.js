/**
 * Created by Frank on 26.11.2015.
 */

define(['app/models/guest'], function(Guest){
    "use strict"
    return function($scope, $location, $routeParams, GuestRepository){
        this.scope = $scope;

        var eventId = $routeParams.eventId;
        var guestId = $routeParams.guestId;
        this.scope.eventId = eventId;
        this.scope.event = GuestRepository.get(eventId,guestId,function(guest){
            this.scope.guest = guest;
        }.bind(this));


        this.scope.update = function(){
            GuestRepository.update($scope.event, function(){
                    $location.path('/events'+eventId+'/guests');
                }
            );
        };

    }
});