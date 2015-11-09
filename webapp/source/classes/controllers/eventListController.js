define([], function() {
    'use strict';

    var EventListController = function($scope, EventRepository) {
       var self = this;
       self.scope = $scope;
       EventRepository.all(function(events) {
          self.scope.events = events;
       });
    };

    return EventListController;
});
