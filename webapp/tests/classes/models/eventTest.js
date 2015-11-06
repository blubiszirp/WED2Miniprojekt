define(['app/models/event', 'app/services/eventFactory'], function (Event, EventFactory) {
    'use strict';

    describe('Event test suite', function() {
        var event;

        // setup
        beforeEach(function() {
            event = EventFactory.createTestEvent();
        });

		  describe('id', function() {
		      it('is a UUID', function() {
                expect(event.id).toMatch(new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}'));
            });
		  });

        it('Expects changed event begin on set begin', function() {
            expect(event.begin)
                .toEqual(new Date('2015-10-10T12:00:00.000Z'));
            event.begin = new Date('2015-10-10T17:00:00.000Z');
            expect(event.begin)
                .toEqual(new Date('2015-10-10T17:00:00.000Z'));
        });

        it('Expects changed event end on set end', function() {
            expect(event.end)
                .toEqual(new Date('2015-10-11T12:00:00.000Z'));
            event.end = new Date('2015-10-11T04:00:00.000Z');
            expect(event.end)
                .toEqual(new Date('2015-10-11T04:00:00.000Z'));
        });
    });
});
