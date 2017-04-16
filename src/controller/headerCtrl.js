'use strict';

angular.module("k.app")
.controller('headerCtrl',['$scope','commonService','appConstants',function($scope,commonService,appConstants){
    
    console.log("#headerCtrl");
    $scope.data = "";
    $scope.test = function(){
        console.log("#headerCtrl - click >>>>>>>");
        commonService.getData(appConstants.endpointurl.SERVICE1_URL).then(
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