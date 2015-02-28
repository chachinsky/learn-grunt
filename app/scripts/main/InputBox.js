define(function(require){
	'use strict';

	var Backbone = require('backbone');
	var Templates = require('Templates');
	var Mustache = require('mustache');

	var InputBox = Backbone.View.extend({
		template : Templates.InputBox,
		events: {
			'keyup input' : 'setValue'
		},
		render: function(){
			var html = this.compileHtml();
			this.$el.html(html);
			return this.$el;
		},
		compileHtml: function(){
			return Mustache.render(this.template, this.model.toJSON());
		},
		setValue: function(e){
			var input = $(e.target);
			var number = +input.val();
			this.model.setNumber(number);
			return false;
		}
	});

	return InputBox;
});