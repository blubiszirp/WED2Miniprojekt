/**
 * Created by Frank on 21.11.2015.
 */
define([], function() {
    'use strict';

    var GuestListController = function($scope, $routeParams, GuestRepository) {
        this.scope = $scope;
        var eventId = $routeParams.eventId;
        this.scope.eventId = eventId;
        this.scope.guests = GuestRepository.all(eventId,function(guests){
            this.scope.guests = guests;
        }.bind(this));
    }

    return GuestListController;
});
