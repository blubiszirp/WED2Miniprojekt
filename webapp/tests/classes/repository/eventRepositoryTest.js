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
				$httpBackend.when('POST', eventRepository.urls.update.replace('{eventId}', event.id)).respond();
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
					$httpBackend.expectPOST(eventRepository.urls.add,event).respond(200, '');

					eventRepository.add(event,function(){});

					expect($httpBackend.flush).not.toThrow();
				});
			});
			describe('update()', function(){
				it('update an event', function() {
					var eventToUpdate = null;
					eventRepository.get(event.id, function(event) { eventToUpdate = event; });

					$httpBackend.flush();
					eventToUpdate.name = "PARTY PARTY";
					$httpBackend.expectPOST(eventRepository.urls.update.replace('{eventId}',eventToUpdate.id),eventToUpdate).respond(200, '');
					eventRepository.update(eventToUpdate,function(){});

					expect($httpBackend.flush).not.toThrow();
				});
			});

		});
	});
