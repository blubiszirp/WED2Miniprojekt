define(['app/models/event',
        'app/repository/eventRepository',
        'libraries/angularMocks',
        'app/services/eventFactory'],
       function (Event, EventRepository, AngularMocks, EventFactory) {
	'use strict';

	describe('EventEventRepository test suite', function() {
      var event, eventRepository, $http, $httpBackend;

      beforeEach(AngularMocks.inject(function($injector) {
         $http = $injector.get('$http');
         $httpBackend = $injector.get('$httpBackend');

         eventRepository = new EventRepository($http);
         event = EventFactory.createTestEvent();

         // $http Service will return this list of events when call /api/events
         $httpBackend.when('GET', eventRepository.urls.all).respond({
            events: [{id: 1, name: 'Dinner'},{id: 2, name: 'Lunch'}]
         });
      }));

      // Check if there are no hanging requests
      afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
      });

      it('returns an Array', function() {
         var events = null;
         eventRepository.all(function(eventList) {
            events = eventList;
         });

         // Mock ajax channel needs to be flushed (calls needs to be fired) befor check
         $httpBackend.flush();
         expect(events).toEqual(jasmine.any(Array));
      });

      it('returns two events', function() {
         var events = null;
         eventRepository.all(function(eventList) {
            events = eventList;
         });

         // Mock ajax channel needs to be flushed (calls needs to be fired) befor check
         $httpBackend.flush();
         expect(events.length).toBe(2);
      });

		describe('get()', function() {
			beforeEach(function() {
				var ret = eventRepository.events.add(event);
			});

			describe('by object id', function() {
				it('returns the object', function() {
					var returnedEvent = eventRepository.events.get(event.id);

					expect(returnedEvent).toEqual(event);
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					var returnedEvent = eventRepository.events.get(0);

					expect(returnedEvent).toBeNull();
				});
			});
		});

		describe('all()', function() {
			it('returns an Array', function() {
				var eventList = eventRepository.events.all();

				expect(eventList).toEqual(jasmine.any(Array));
			});
		});

		describe('add()', function() {
			it('inserts element', function() {
				var oldSize = eventRepository.events.length();
				eventRepository.events.add(event);
				var newSize = eventRepository.events.length();
				expect(newSize).toBe(oldSize + 1);
			});

			describe('same element again', function() {
				var returnValue;
				var oldSize;

				beforeEach(function() {
					eventRepository.events.add(event);

					oldSize = eventRepository.events.length();
					returnValue = eventRepository.events.add(event);
				});

				it('doesn\'t affect repository size', function() {
					var newSize = eventRepository.events.length();
					expect(newSize).toBe(oldSize);
				});

				it('returns false', function() {
					expect(returnValue).toBe(false);
				});
			});
		});

	});
});
