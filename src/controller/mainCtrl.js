'use strict';

angular.module("k.app")
.controller("mainCtrl",['$scope',function($scope){
    console.log("#mainCtrl");
    $scope.test = function(){
        console.log("#mainCtrl - click >>>>>>>");
    }

}]);