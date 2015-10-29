/**
 * Created by Frank on 29.10.2015.
 */
define([], function() {
    'use strict';

    var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmoutOfGuests) {
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