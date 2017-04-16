'use strict';
angular.module('k.app.service',[])
    .factory('commonService', ['$http', '$q', function($http, $q){
        return {
            getData: function(url) {
                var deferred = $q.defer();
                $http.get(url,{})
                    .then(function(res) {
                        console.log(res);
                        return deferred.resolve(res);
                    }, function(err) {
                        return deferred.reject(err);
                    });
                return deferred.promise;
            },
            getTestValue(url){
                return url;
            }
        };
 
}]);