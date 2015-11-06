define(['app/services/uuidService'], function(UUIDService) {
    'use strict';

    var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmoutOfGuests, uuid) {
		  if (typeof uuid === 'undefined') {
	         uuid = UUIDService.getRandomUuid();
        }
        this.id = uuid;
        this.name = name;
        this.description = description;
        this.targetGroup = targetGroup;
        this.contributionsDescription = contributionsDescription;
        this.location = location;
        this.times = times;
        this.maximalAmoutOfGuests = maximalAmoutOfGuests;

        Object.defineProperty(this, 'begin', {
            get: function() {
                return this.times.begin;
            },
            set: function(begin) {
                this.times.begin = begin;
            }
        });

        Object.defineProperty(this, 'end', {
            get: function() {
                return this.times.end;
            },
            set: function(end) {
                this.times.end = end;
            }
        });
    };

    return Event;
});
