'use strict';

angular.module("k.app")
.directive('kHeaderDir', function(appConstants) {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: appConstants.template.HEADER_TMPL_URL,
        controller : 'headerCtrl'
    }
})