require.config({
	paths: {
		'jquery' : '../../bower_components/jquery/dist/jquery',
		'backbone' : '../../bower_components/backbone/backbone',
		'underscore' : '../../bower_components/underscore/underscore-min',
		'text' : '../../bower_components/text/text',
		'mustache' : '../../bower_components/mustache/mustache',
		'Templates' : 'templates/Templates'
	}
});

define(function(require){
	'use strict';

	var App = require('main/App');

	new App({
		el: $('#main')
	}).render();

});