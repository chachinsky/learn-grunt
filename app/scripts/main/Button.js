define(function(require){
	'use strict';
	
	var Backbone = require('backbone');

	var Button = Backbone.View.extend({
		tagName: 'button',
		events: {
			'click': 'sum'
		},
		sum: function(){
			//Will be overridden
			return false;
		}
	});

	return Button;
});