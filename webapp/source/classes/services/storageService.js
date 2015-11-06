define(['app/models/event'], function(Event) {
    'use strict';

    var StorageService = function() {
        this.events = new (function() {
            //var eventList = {};
            var eventList = new Array();
            
            /**
             * Find event by identifier
             *
             * @param string identifier
             * @return Event or null
             */
            this.get = function(identifier) {
            	for (var index = 0; index < eventList.length; index++) {
            		 var event = eventList[index];
            		 if (event.id == identifier) {
            		     return event;
            		 }
            	}
            
            	return null;
            };
            
            /**
             * Get all events
             *
             * @return Event[]
             */
            this.all = function() {
					// we use map to deep copy the array of object references, which slice() would not do
            	return eventList.map(function(event) {
            		return event;
               });
            };
            
            /**
             * Add event if not already in list
             *
             * @param Event event
             * @return boolean whether added successfully
             */
            this.add = function(event) {
            	if (this.get(event.id) == null) {
            		eventList.push(event);
            
            		return true;
            	}
            
            	return false;
            };

				/**
				 * Return event count
             *
             * @return integer number of events
             */
				this.length = function() {
					return eventList.length;
				}

			   // default events
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
			 		null,
					'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa'
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
			 		null,
					'bbbbbbbb-bbbb-4bbb-bbbb-bbbbbbbbbbbb'
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
			 		null,
					'cccccccc-cccc-4ccc-cccc-cccccccccccc'
			   )

			 	eventList.push(event1);
			 	eventList.push(event2);
			 	eventList.push(event3);
        })();
    };

    return StorageService;
});
