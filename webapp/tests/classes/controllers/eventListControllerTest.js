define(['app/controllers/eventListController'], function (EventListController) {
	'use strict';
	describe('EventListController test suite', function() {
		it('Expects 3 events on scope', function() {
			var scope = {};
			var eventListController = new EventListController(scope);
			expect(3).toBe(eventListController.scope.events.length);
		});
	});
});
