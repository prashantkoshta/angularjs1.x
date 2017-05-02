describe('k.app.service', function() {
  var commonService;
  var appConstants;
  var $http;
  var $q;
  var deferred;
  var $rootScope;
  var $httpBackend;
  var controller;

  beforeEach(module('k.app.service'));
  beforeEach(module('k.app.config'));

  beforeEach(inject(function($injector) {
    appConstants = $injector.get('appConstants');
   // $http = $injector.get('$http');
    $httpBackend = $injector.get('$httpBackend');
    $q = $injector.get('$q');
    commonService = $injector.get('commonService');
    $rootScope = $injector.get('$rootScope').$new();
    deferred = $q.defer();
   // spyOn(commonService, 'getData').and.callFake(function(){ return deferred.promise});
  // commonService.getData(appConstants.endpointurl.SERVICE1_URL);

  }));

  it('Mocking http', function () {
       var result =  '{"data":"Got data now"}';
       $httpBackend.expectGET(appConstants.endpointurl.SERVICE1_URL).respond(result);
       commonService.getData(appConstants.endpointurl.SERVICE1_URL).then(function(data) {
            expect(data).not.toBeNull();
            //expect(data).toEqual(result);
        });

         
        $httpBackend.flush();

        
  });

  it("Testing value method",function(){
      expect(commonService.getTestValue(appConstants.endpointurl.SERVICE1_URL)).toEqual(appConstants.endpointurl.SERVICE1_URL);
  });
  
});