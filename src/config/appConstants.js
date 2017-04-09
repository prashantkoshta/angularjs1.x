'use strict';
angular.module('k.app.config', [])
.constant('appConstants',{
    'template' : {
        'HOME_TMPL_URL':'template/home.html',
        'CONTACTUS_TMPL_URL':'template/contactus.html',
        'HEADER_TMPL_URL':'template/directive/header.html'
    },
    'endpointurl' : {
        'SERVICE1_URL' : '/testservice'
    },
    'application': {
        'contextPath' :'SRC'
    }
});