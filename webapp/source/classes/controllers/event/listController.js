define([], function() {
    'use strict';

    var EventListController = function($scope, $location, EventRepository) {
       this.scope = $scope;
       EventRepository.all(function(events) {
          this.scope.events = events;
       }.bind(this));

        this.scope.loadDetail = function(eventid){
            $location.path('/events/'+eventid);
        };

        this.scope.addEvent = function(){
            $location.path('/addEvent');
        }
    };

    return EventListController;
});
