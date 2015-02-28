define(function(require){
	'use strict';
	
	var Backbone = require('backbone');

	var Output = Backbone.View.extend({
		initialize: function(){
			this.model.on('change', this.render, this);
		},
		render: function(){
			this.$el.html('The answer is ' + this.model.getNumber());

			return this.$el;
		}
	});

	return Output;
});