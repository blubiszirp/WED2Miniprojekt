/**
 * Created by Frank on 22.10.2015.
 */

define(['app/models/event'], function(Event) {
    'use strict';

    var EventListController = function($scope) {
        var event1 = new Event(
            'Lunch',
            null,
            null,
            null,
            {
                city: 'Rapperswil'
            },
            {
                begin: new Date('2015-10-10T12:00:00.000Z'),
                end: new Date('2015-10-10T13:00:00.000Z')
            },
            null
        )
        var event2 = new Event(
            'Dinner',
            null,
            null,
            null,
            {
                city: 'Zuerich'
            },
            {
                begin: new Date('2015-04-05T16:00:00.000Z'),
                end: new Date('2015-04-05T17:00:00.000Z')
            },
            null
        )
        var event3 = new Event(
            'Dinner',
            null,
            null,
            null,
            {
                city: 'Rapperswil'
            },
            {
                begin: new Date('2015-12-08T17:00:00.000Z'),
                end: new Date('2015-12-08T18:00:00.000Z')
            },
            null
        )

        this.scope = $scope;
        this.scope.events = [
            event1,
            event2,
            event3
        ];
        /*this.scope.events = [
            { name: 'Lunch', place: 'Rapperswil', date: new Date('2015-10-10T10:00:00.000Z') },
            { name: 'Dinner', place: 'Zürich', date: new Date('2015-04-05T16:00:00.000Z') },
            { name: 'Dinner', place: 'Rapperswil', date: new Date('2015-12-08T17:00:00.000Z') }
        ];*/
    }

    return EventListController;
});