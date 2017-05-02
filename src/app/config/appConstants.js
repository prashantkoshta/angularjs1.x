'use strict';
angular.module('k.app.config', [])
.constant('appConstants',{
    'template' : {
        'HOME_TMPL_URL':'app/template/home.html',
        'CONTACTUS_TMPL_URL':'app/template/contactus.html',
        'HEADER_TMPL_URL':'app/template/directive/header.html'
    },
    'endpointurl' : {
        'SERVICE1_URL' : '/testservice'
    },
    'application': {
        'contextPath' :'SRC'
    }
});