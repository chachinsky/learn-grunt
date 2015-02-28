module.exports = function(grunt){

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'app/scripts/**/*.js']
		},
		connect: {
			server: {				
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['jshint']);
};