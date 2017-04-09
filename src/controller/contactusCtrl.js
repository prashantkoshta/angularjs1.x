'use strict';

angular.module("k.app")
.controller('contactusCtrl',['$scope',function($scope){
    
    console.log("#contactusCtrl");

    $scope.test = function(){
        console.log("#contactusCtrl - click >>>>>>>");
    }

}]);