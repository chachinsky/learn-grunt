define(function(require){
	'use strict';

	var Backbone = require('backbone');
	var InputBox = require('main/InputBox');
	var InputModel = require('main/InputModel');
	var ButtonContainer = require('main/ButtonContainer');
	var Output = require('main/Output');

	var App = Backbone.View.extend({
		render: function(){
			var value1 = this.createInputBox(1);
			var value2 = this.createInputBox(2);
			var answer = this.createAnswerModel();
			this.createButtonContainer(value1, value2, answer);
			this.createResultArea(answer);

			return this.$el;
		},
		createInputBox: function(label){
			var inputModel = new InputModel({
				label: label
			});

			var inputBox = new InputBox({
				model: inputModel
			});

			this.$el.append(inputBox.render());

			return inputModel;
		},
		createButtonContainer: function(value1, value2, answer){
			this.$el.append(new ButtonContainer({
				value1 : value1,
				value2 : value2,
				answer: answer
			}).render());
		},
		createAnswerModel: function(){
			return new InputModel();
		},
		createResultArea: function(answer){			
			this.$el.append(new Output({model: answer}).render());
		}
	});

	return App;
});