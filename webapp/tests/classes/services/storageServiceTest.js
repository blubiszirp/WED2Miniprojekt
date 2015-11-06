define(['app/models/event', 'app/services/storageService', 'app/services/eventFactory'], function (Event, StorageService, EventFactory) {
	'use strict';

	describe('EventStorageService test suite', function() {
		var event, storageService;

		// setup
		beforeEach(function() {
			storageService = new StorageService();
			event = EventFactory.createTestEvent();
 		});

		describe('get()', function() {
			beforeEach(function() {
				var ret = storageService.events.add(event);
			});

			describe('by object id', function() {
				it('returns the object', function() {
					var returnedEvent = storageService.events.get(event.id);

					expect(returnedEvent).toEqual(event);
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					var returnedEvent = storageService.events.get(0);

					expect(returnedEvent).toBeNull();
				});
			});
		});

		describe('all()', function() {
			it('returns an Array', function() {
				var eventList = storageService.events.all();

				expect(eventList).toEqual(jasmine.any(Array));
			});
		});

		describe('add()', function() {
			it('inserts element', function() {
				var oldSize = storageService.events.length();
				storageService.events.add(event);
				var newSize = storageService.events.length();
				expect(newSize).toBe(oldSize + 1);
			});

			describe('same element again', function() {
				var returnValue;
				var oldSize;

				beforeEach(function() {
					storageService.events.add(event);
					oldSize = storageService.events.length();
					returnValue = storageService.events.add(event);
				});

				it('doesn\'t affect repository size', function() {
					var newSize = storageService.events.length();
					expect(newSize).toBe(oldSize);
				});

				it('returns false', function() {
					expect(returnValue).toBe(false);
				});
			});
		});
	});
});
