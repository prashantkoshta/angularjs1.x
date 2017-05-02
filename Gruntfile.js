module.exports = function(grunt) {

  grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        sass: {
            dist: {
               options :{

               } ,
               files: {
                    'src/assets/css/global/common.css': 'src/sass/global/common.scss',
                     'src/assets/css/app/home/home.css': 'src/sass/app/home/home.scss'
                }
            }
        },
        watch: {
            css: {
                files: './**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','watch']);
  grunt.registerTask('test', ['karma']);
};