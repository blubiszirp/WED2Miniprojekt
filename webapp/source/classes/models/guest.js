/**
 * Created by Frank on 21.11.2015.
 */

define(['app/services/uuidService'], function(UUIDService) {
    'use strict';

    var Guest = function(name, contribution, comment, canceled, id) {

        this.id = id || UUIDService.getRandomUuid();
        this.name = name;
        this.contribution = contribution;
        this.canceled = canceled;
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
            jsonData.canceled,
            jsonData.id
        );
    };

    return Guest;
});