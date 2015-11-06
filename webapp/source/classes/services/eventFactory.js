define(['app/models/event'], function(Event) {
    'use strict';

    var EventFactory = new function() {
        this.createTestEvent = function() {
            return new Event(
            	'Test Event',
            	'test description',
            	'test target group',
            	'test contributions',
            	{
            	    city: 'Test City'
            	},
            	{
            	    begin: new Date('2015-10-10T12:00:00.000Z'),
            	    end: new Date('2015-10-11T12:00:00.000Z')
            	},
            	42
            );
        }
    }

    return EventFactory;
});
