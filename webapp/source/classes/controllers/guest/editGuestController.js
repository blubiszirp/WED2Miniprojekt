define(['app/models/guest'], function(Guest){
    "use strict"
    return function($scope, $location, $routeParams, GuestRepository){
        this.scope = $scope;

        var eventId = $routeParams.eventId;
        var guestId = $routeParams.guestId;
        this.scope.eventId = eventId;
        GuestRepository.get(eventId,guestId,function(guest){
            this.scope.guest = guest;
        }.bind(this));


        this.scope.update = function(){
            GuestRepository.update(eventId, $scope.guest, function() {
                $location.path('/events/' + eventId + '/guests');
            });
        };

    }
});
