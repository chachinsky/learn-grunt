define(function(require){
	'use strict';
	
	var Backbone = require('backbone');
	var PlusButton = require('main/PlusButton');
	var SubtractButton = require('main/SubtractButton');

	var ButtonContainer = Backbone.View.extend({
		initialize: function(options){
			this.value1 = options.value1;
			this.value2 = options.value2;
			this.answer = options.answer;
		},
		render: function(){
			var plus = this.createButton(PlusButton);
			var subtract = this.createButton(SubtractButton);

			this.$el.append(plus.render());
			this.$el.append(subtract.render());

			return this.$el;
		},
		createButton: function(ButtonClass){
			return new ButtonClass({
				value1 : this.value1,
				value2 : this.value2,
				answer : this.answer
			});
		}
	});

	return ButtonContainer;
});