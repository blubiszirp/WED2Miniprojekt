define(['app/models/event'], function(Event) {
    'use strict';

    var EventRepository = function($http) {
        this.urls = {
           all: '/api/events',
           get: '/api/events/{eventId}',
           add: '/api/events'
        }

        /**
         * Get all events
         *
         * @return Event[]
         */
        this.all = function(successCallback) {
        	// Angular HTTP-Service get request
        	// return event list by callback on success
        	$http.get(this.urls.all)
                .success(function(data) {
                    // map applys a function on every element in the array and returns the result as new array
                    var events = data.events.map(function(eventDTO) {
                        return Event.createFromDTO(eventDTO);
                    });
                    successCallback(events);
                });
        }

        this.get = function (identifier, successCallback) {
           $http.get(this.urls.get.replace('{eventId}', identifier))
               .success(function(eventDTO) {
                      successCallback(Event.createFromDTO(eventDTO));
                  });
        }

        this.add = function(event,successCallback) {
           var success = false;
           $http.post(this.urls.add,event)
              .success(function() {
                   successCallback();
              });
           return success;
        }

        this.update = function(event,successCallback){
            $http.post(this.urls.get.replace('{eventId}',event.id),event)
                .success(function(){
                   successCallback();
                });
        }
    }
    return EventRepository;
});
