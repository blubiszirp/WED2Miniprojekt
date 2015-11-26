/**
 * Created by Frank on 26.11.2015.
 */

define(['app/models/guest'], function(Guest){
    "use strict"
    return function($scope, $location, $routeParams, GuestRepository){
        this.scope = $scope;
        var eventId = $routeParams.eventId;
        this.scope.eventId = eventId;
        this.scope.guest = new Guest();
        this.scope.addGuest = function(){
            GuestRepository.add(eventId,$scope.guest, function(){
                    $location.path('/events/'+eventId+'/guests');
                }
            );
        };
    }
});