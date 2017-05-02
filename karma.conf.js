
//jshint strict: false
module.exports = function(config) {
    /*
    config.LOG_DISABLE
    config.LOG_ERROR
    config.LOG_WARN
    config.LOG_INFO
    config.LOG_DEBUG
*/
  config.set({

    basePath: './',
    colors: true,
    port:   9876,
    logLevel: config.LOG_INFO,
    files: [
      './node_modules/angular/angular.min.js',
        './node_modules/angular-route/angular-route.min.js',
        './node_modules/angular-mocks/angular-mocks.js',  
      './src/**/*.js'
    ],
    exclude: [
        
    ],
    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],
    reporters: ['progress','junit'],
    junitReporter: {
      outputFile: 'test_report/test_out/unit.xml',
      suite: 'unit'
    }

  });
};