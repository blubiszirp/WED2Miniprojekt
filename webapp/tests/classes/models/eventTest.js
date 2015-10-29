/**
 * Created by Frank on 29.10.2015.
 */
define(['app/models/event'], function (Event) {
    'use strict';

    describe('Event test suite', function() {
        var event;

        // setup
        beforeEach(function() {
            event = new Event(
                'Dota',
                'playing Dota2 together',
                'Dota2-players',
                'snacks',
                {
                    city: 'Uster'
                },
                {
                    begin: new Date('2015-10-10T12:00:00.000Z'),
                    end: new Date('2015-10-11T12:00:00.000Z')
                },
                5
            );
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
