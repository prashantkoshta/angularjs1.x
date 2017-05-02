'use strict';

angular.module("k.app", [
    "ngRoute",
    'k.app.config',
    'k.app.service'
])
.config(function($routeProvider,$locationProvider,appConstants) {
    $routeProvider
    .when("/", {
        templateUrl : appConstants.template.HOME_TMPL_URL,
        controller : 'homeCtrl'
    })
    .when("/contact/:test/:abc", {
        templateUrl : appConstants.template.CONTACTUS_TMPL_URL,
        controller : 'contactusCtrl'
    })
    .otherwise({
       redirectTo: '/'
    });
    $locationProvider.html5Mode(false);
});