define(['app/models/event', 'app/repository/eventRepository', 'app/services/eventFactory'], function (Event, EventRepository, EventFactory) {
	'use strict';

	describe('EventEventRepository test suite', function() {
		var event, eventRepository;

		// setup
		beforeEach(function() {
			eventRepository = new EventRepository();
			event = EventFactory.createTestEvent();
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
