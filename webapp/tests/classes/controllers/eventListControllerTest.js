define(['app/controllers/eventListController',
        'frameworks/angular',
        'libraries/angularMocks',
        'app/repository/eventRepository'],
       function(EventListController, Angular, AngularMocks, EventRepository) {
	'use strict';

	var eventListController;

	beforeEach(AngularMocks.inject(function ($rootScope){
		var scope = $rootScope.$new();
		var eventRepository = new EventRepository();
		eventListController = new EventListController(scope, eventRepository);
	}));

	describe('EventListController', function(){
		describe('property scope', function(){
			it('contains 3 events', function(){
				expect(3).toBe(eventListController.scope.events.length());
			});
		});
	});
});
