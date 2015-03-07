module.exports = function(grunt){
	'use strict';

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'app/scripts/**/*.js'],
			options: {
				reporter: require('jshint-stylish')
			}
		},
		connect: {
			server: {
				options:{
					port: 9000,
					base: 'app',
					keepalive: false,
					open: {
						target: 'http://localhost:9000'
					}
				}		
			}
		},
		watch: {
			lintingtasks: {
				files: ['app/scripts/**/*.js'],
				tasks: ['jshint']
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'connect', 'watch']);
};