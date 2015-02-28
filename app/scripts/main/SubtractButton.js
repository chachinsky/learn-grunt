define(function(require){
	'use strict';
	
	var Button = require('main/Button');

	var SubtractButton = Button.extend({
		initialize: function(options){
			this.value1 = options.value1;
			this.value2 = options.value2;
			this.answer = options.answer;
		},
		render: function(){
			return this.$el.html('-');
		},
		sum: function(){
			var sum = this.value1.getNumber() - this.value2.getNumber();

			this.answer.setNumber(sum);
			return false;
		}
	});

	return SubtractButton;
});