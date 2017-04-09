'use strict';

angular.module("k.app")
.controller('homeCtrl',['$scope',function($scope){
    
    console.log("#homeCtrl");

    $scope.test = function(){
        console.log("#homeCtrl - click >>>>>>>");
    }

}]);

