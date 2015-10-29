/**
 * Created by Frank on 22.10.2015.
 */

define(['frameworks/angular', 'app/controllers/eventListController', 'app/services/storageService', 'libraries/angularRoute'], function (Angular, EventListController, StorageService) {
    'use strict';
    var Lafete = Angular.module('lafete', ['ngRoute']);

    /* services */
    Lafete.service('StorageService', StorageService);

    /* controllers */
    Lafete.controller('EventListController', EventListController);
    EventListController.$inject = ['$scope', 'StorageService'];

    return Lafete;
});