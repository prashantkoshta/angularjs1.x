'use strict';
angular.module('k.app.service',[])
    .factory('commonService', ['$http', '$q','appConstants', function($http, $q,appConstants){
        return {
            getData: function() {
                var deferred = $q.defer();
                $http.get(appConstants.endpointurl.SERVICE1_URL,{})
                    .then(function(res) {
                        return deferred.resolve(res);
                    }, function(err) {
                        return deferred.reject(err);
                    });
                return deferred.promise;
            }
        };
 
}]);