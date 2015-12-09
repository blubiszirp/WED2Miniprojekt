define(['app/models/guest',
        'app/repository/guestRepository',
        'libraries/angularMocks'],
    function (Guest, GuestRepository, AngularMocks) {
        'use strict';
        describe('GuestRepository test suite', function() {
            var guest, guestRepository, $http, $httpBackend;

            beforeEach(AngularMocks.inject(function($injector) {
                $http = $injector.get('$http');
                $httpBackend = $injector.get('$httpBackend');

                guestRepository = new EventRepository($http);
                //guest = EventFactory.createTestEvent();
                guest = {id: 1,
                        name: 'Hans'};


                $httpBackend.when('GET', guestRepository.urls.all).replace('{eventId}', eventId).respond({
                    guests: [{
                        id: 1,
                        name: 'Hans',
                    },{
                        id: 2,
                        name: 'Franz',
                    }]
                });

                $httpBackend.when('GET', eventRepository.urls.get.replace('{eventId}', eventId)).replace('{guestId}', guestId).respond(guest);
            }));

            // Check if there are no hanging requests
            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('all()', function(){
                //TODO
            });
            describe('get()', function(){
                //TODO
            });

            describe('add()', function(){
                //TODO
            });
            describe('update()', function(){
                //TODO
            });

        });
    });
