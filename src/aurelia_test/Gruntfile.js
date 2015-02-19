/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/',
                        src: ['**/*.js'],
                        dest: 'wwwroot/dist/',
                        ext: '.js'
                    }
                ]
            }
        },
        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/',
                        src: ['**/*.html'],
                        dest: 'wwwroot/dist',
                        ext: '.html'
                    }
                ]
            },
            jspm: {
                files: [
                    {
                        expand: true,
                        cwd: 'jspm_packages/',
                        src: ['**/*'],
                        dest: 'wwwroot/jspm_packages/'
                    }
                ]

            },
            sys: {

                src: './config.js',
                dest: 'wwwroot/config.js'


            }
        }
    });

    grunt.registerTask('default', ['babel']);
    grunt.registerTask('copy', ['copy']);
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
};