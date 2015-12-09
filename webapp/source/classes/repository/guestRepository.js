/**
 * Created by Frank on 21.11.2015.
 */
define(['app/models/guest'], function(Guest) {
    'use strict';

    var GuestRepository = function($http) {
        this.urls = {
            all: '/api/events/{eventId}/guests',
            get: '/api/events/{eventId}/guests/{guestId}',
            add: '/api/events/{eventId}/guests',
            update: '/api/events/{eventId}/guests/{guestId}'
        }

        /**
         * Get all guests of a event
         *
         * @return Guest[]
         */
        this.all = function(eventId,successCallback) {
            // Angular HTTP-Service get request
            // return guest list by callback on success
            $http.get(this.urls.all.replace('{eventId}', eventId))
                .success(function(data) {
                    // map applys a function on every element in the array and returns the result as new array
                    var guests = data.guests.map(function(guestDTO) {
                        return Guest.createFromDTO(guestDTO);
                    });
                    successCallback(guests);
                });
        }

        this.get = function (eventId, guestId, successCallback) {
            $http.get(this.urls.get.replace('{eventId}', eventId).replace('{guestId}', guestId))
                .success(function(guestDTO){
                    successCallback(Guest.createFromDTO(guestDTO));
                });
        };

        this.add = function(eventId,guest,successCallback) {
            $http.post(this.urls.add.replace('{eventId}', eventId),guest)
                .success(function() {
                    successCallback(true);
                });
        }

        this.update = function(eventId,guest,successCallback){
            $http.post(this.urls.update.replace('{eventId}',eventId).replace('{guestId}',guest.id),guest)
                .success(function(){
                    successCallback(true);
                });
        }
    }
    return GuestRepository;
});
