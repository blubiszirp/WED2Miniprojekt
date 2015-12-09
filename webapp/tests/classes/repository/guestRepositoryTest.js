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

                guestRepository = new GuestRepository($http);
                //guest = EventFactory.createTestEvent();
                guest = new Guest('Hans','Nothing','to late',false);

                $httpBackend.when('GET', guestRepository.urls.all.replace('{eventId}', '1')).respond({
                    guests: [{
                        id: 1,
                        name: 'Hans',
                    },{
                        id: 2,
                        name: 'Franz',
                    }]
                });

                $httpBackend.when('GET', guestRepository.urls.get.replace('{eventId}', '1').replace('{guestId}', guest.id)).respond(guest);
                $httpBackend.when('POST', guestRepository.urls.add.replace('{eventId}', '1')).respond();
                $httpBackend.when('POST', guestRepository.urls.update.replace('{eventId}', '1').replace('{guestId}', guest.id)).respond();
            }));

            // Check if there are no hanging requests
            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('all()', function(){
                it('returns an Array', function() {
                    var guests = null;
                    guestRepository.all(1,function(guestList) {
                        guests =guestList;
                    });

                    $httpBackend.flush();
                    expect(guests).toEqual(jasmine.any(Array));
                });

                it('returns two guests', function() {
                    var guests = null;
                    guestRepository.all(1,function(guestList) {
                        guests = guestList;
                    });

                    $httpBackend.flush();
                    expect(guests.length).toBe(2);
                });


            });
            describe('get()', function(){
                describe('by object id', function() {
                    it('returns the object', function() {
                        var returnedGuest = null;
                        guestRepository.get(1,guest.id, function(guest) { returnedGuest = guest; });

                        $httpBackend.flush();
                        expect(returnedGuest).toEqual(guest);
                    });
                });

                describe('by inexistent object id', function() {
                    it('returns null', function() {
                        var inexistentId = 12345679;
                        var returnedGuest = null;
                        $httpBackend.expectGET(guestRepository.urls.get.replace('{eventId}', 1).replace('{guestId}', inexistentId))
                            .respond(404, '');
                        guestRepository.get(1,inexistentId, function(guest) { returnedGuest = guest; });

                        $httpBackend.flush();
                        expect(returnedGuest).toBeNull();
                    });
                });
            });

            describe('add()', function(){
                it('add an guest', function() {
                    var guestToAdd = guest;
                    $httpBackend.expectPOST(guestRepository.urls.add.replace('{eventId}','1'),guestToAdd).respond(200, '');
                    guestRepository.add(1,guestToAdd,function(){});
                    $httpBackend.flush();
                    expect(true).toBe(true);
                });
            });
            describe('update()', function(){
                it('update an guest', function() {
                    var guestToUpdate = null;
                    guestRepository.get(1,guest.id, function(guest) { guestToUpdate = guest; });
                    $httpBackend.flush();
                    guestToUpdate.name = "Max";
                    $httpBackend.expectPOST(guestRepository.urls.update.replace('{eventId}','1').replace('{guestId}',guestToUpdate.id),guestToUpdate).respond(200, '');
                    guestRepository.update(1,guestToUpdate,function(){});
                    $httpBackend.flush();
                    expect(true).toBe(true);
                });
            });

        });
    });
