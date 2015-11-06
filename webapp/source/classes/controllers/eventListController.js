// TODO: missing storageService dependency?
define([], function(Event) {
    'use strict';

    var EventListController = function($scope, storageService) {
        this.scope = $scope;
        this.scope.events = storageService.events;
    }

    return EventListController;
});
