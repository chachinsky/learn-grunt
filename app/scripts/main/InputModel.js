define(function(require){
	'use strict';
	
	var Backbone = require('backbone');

	var InputModel = Backbone.Model.extend({
		defaults: {
			number : 0,
			label: -1
		},
		setNumber: function(number){
			this.set('number', number);
		},
		getNumber: function(){
			return this.get('number');
		}
	});

	return InputModel;
});