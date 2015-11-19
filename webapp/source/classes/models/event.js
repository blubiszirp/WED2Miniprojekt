define(['app/services/uuidService'], function(UUIDService) {
    'use strict';

    var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmoutOfGuests, uuid) {

        this.id = uuid || UUIDService.getRandomUuid();
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

    /**
     * Create Event object from data transfer object (json object)
     */
    Event.createFromDTO = function(jsonData) {
        return new Event(
            jsonData.name,
            jsonData.description,
            jsonData.targetGroup,
            jsonData.contributionsDescription,
            jsonData.location,
            jsonData.times,
            jsonData.maximalAmoutOfGuests,
            jsonData.id
        );
    };

    return Event;
});
