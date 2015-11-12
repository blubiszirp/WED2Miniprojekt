define([], function() {
    'use strict';

    var EventListController = function($scope, EventRepository) {
       this.scope = $scope;
       EventRepository.all(function(events) {
          this.scope.events = events;
           this.scope.$apply();
       }.bind(this));
    };

    return EventListController;
});
