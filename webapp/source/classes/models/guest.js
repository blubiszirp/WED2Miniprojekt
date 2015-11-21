/**
 * Created by Frank on 21.11.2015.
 */

define([], function() {
    'use strict';

    var Guest = function(name, contribution, comment,id) {

        this.id = null;
        this.name = name;
        this.contribution = contribution;
        this.comment = comment;
    };

    /**
     * Create Event object from data transfer object (json object)
     */
    Guest.createFromDTO = function(jsonData) {
        return new Guest(
            jsonData.name,
            jsonData.contribution,
            jsonData.comment,
            jsonData.id
        );
    };

    return Guest;
});