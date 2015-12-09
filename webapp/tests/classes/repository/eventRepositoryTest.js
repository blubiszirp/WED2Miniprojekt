define(['app/models/event',
		'app/repository/eventRepository',
		'libraries/angularMocks',
		'app/services/eventFactory'],
	function (Event, EventRepository, AngularMocks, EventFactory) {
		'use strict';

		describe('EventRepository test suite', function() {
			var event, eventRepository, $http, $httpBackend;

			beforeEach(AngularMocks.inject(function($injector) {
				$http = $injector.get('$http');
				$httpBackend = $injector.get('$httpBackend');

				eventRepository = new EventRepository($http);
				event = EventFactory.createTestEvent();

				$httpBackend.when('GET', eventRepository.urls.all).respond({
					events: [{
						id: 1,
						name: 'Dinner',
						times: { begin: '01.01.2016 12:00', end: '01.01.2016 18:00' }
					},{
						id: 2,
						name: 'Lunch',
						times: { begin: '02.01.2016 14:00', end: '02.01.2016 20:00' }
					}]
				});

				$httpBackend.when('GET', eventRepository.urls.get.replace('{eventId}', event.id)).respond(event);

				$httpBackend.when('POST', eventRepository.urls.add).respond();
			}));

			// Check if there are no hanging requests
			afterEach(function() {
				$httpBackend.verifyNoOutstandingExpectation();
				$httpBackend.verifyNoOutstandingRequest();
			});

			describe('all()', function () {
				it('returns an Array', function() {
					var events = null;
					eventRepository.all(function(eventList) {
						events = eventList;
					});

					$httpBackend.flush();
					expect(events).toEqual(jasmine.any(Array));
				});
				it('returns two events', function() {
					var events = null;
					eventRepository.all(function(eventList) {
						events = eventList;
					});

					$httpBackend.flush();
					expect(events.length).toBe(2);
				});
			});

			describe('get()', function() {
				beforeEach(function() {
				});

				describe('by object id', function() {
					it('returns the object', function() {
						var returnedEvent = null;
						eventRepository.get(event.id, function(event) { returnedEvent = event; });

						$httpBackend.flush();
						expect(returnedEvent).toEqual(event);
					});
				});

				describe('by inexistent object id', function() {
					it('returns null', function() {
						var inexistentId = 12345679;
						var returnedEvent = null;
						$httpBackend.expectGET(eventRepository.urls.get.replace('{eventId}', inexistentId))
							.respond(404, '');
						eventRepository.get(inexistentId, function(event) { returnedEvent = event; });

						$httpBackend.flush();
						expect(returnedEvent).toBeNull();
					});
				});
			});

			describe('add()', function(){
				it('add an event', function() {
					var event = EventFactory.createTestEvent();
					eventRepository.add(event,function(){});
					$httpBackend.flush();

					$httpBackend.expectPOST('/api/events','hans').respond(201, '');
				});
				//TODO
			});
			describe('update()', function(){
				//TODO
			});

			/*describe('add()', function() {
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
			 });*/

			/*
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
			 it('returns real javascript objects', function() {
			 $httpBackend.expectGET(eventRepository.urls.all);
			 var events = null;
			 eventRepository.all(function(eventList) {
			 events = eventList;
			 });
			 $httpBackend.flush();
			 expect(events[0]).toEqual(jasmine.any(Event));
			 expect(events[1]).toEqual(jasmine.any(Event));
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
			 */
		});
	});
