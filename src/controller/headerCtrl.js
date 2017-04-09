'use strict';

angular.module("k.app")
.controller('headerCtrl',['$scope','commonService',function($scope,commonService){
    
    console.log("#headerCtrl");
    $scope.data = "";
    $scope.test = function(){
        console.log("#headerCtrl - click >>>>>>>");
        commonService.getData().then(
            function(result){
                console.log("#headerCtrl- Result");
                $scope.data = result.data;
            },
            function(error){
                console.log("#headerCtrl- Error");
                $scope.data = error;
            }
        );
    }

}]);