//View for main stats (vit, end, str, etc)
var PrimaryStatView = Backbone.View.extend({
	//passed in: element, render, name
	initialize: function(options) {
		this.name = options.name;
		this.listenTo(this.model, 'change:' + this.name, this.updateColor);
		this.listenTo(this.model, 'change:' + this.name, this.setVal);
		if (this.model.get('startpoint') !== null)
			this.listenTo(this.model.get('startpoint'), 'change:' + this.name, this.updateColor);
		this.setVal();

	},
	events: {
		'change': 'updateStat'
	},
	//passes user input back into model
	updateStat: function() {
		this.model.set(this.name, parseInt(this.$el.val()));
	},
	//changes the value of the input field
	setVal: function() {
		this.$el.val(this.model.get(this.name));
	},
	updateColor: function(){
		this.$el.toggleClass('invalid', !this.model.validate(this.name));
	}
});

//View for secondary stats (HP, resistances, etc)
var SecondaryStatView = Backbone.View.extend({
	initialize: function(options) {
		this.name = options.name;
		this.listenTo(this.model, 'change:' + this.name, this.render);
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get(this.name));
	}
});


var WeaponSelect = Backbone.View.extend( {
	template: _.template($('#weapon-select-template').html()),
	initialize: function() {
		this.render();
		this.listenTo(this.model, 'change:image', this.renderImage);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	events: {
		'change .weaponupgrade': function() {
			var upgrade = this.$('.weaponupgrade option:selected').text().substr(1);
			this.model.set('lvl', parseInt(upgrade));
		},
		'change .weaponname': function() {
			var newName = this.$('.weaponname option:selected').text();
			this.model.set('name', newName);
			var upgrade = this.$('.weaponupgrade option:selected').text().substr(1);
			this.model.set('lvl', parseInt(upgrade));
		} 
	},
	renderImage: function() {
		this.$('.weaponimg').html('<image src=\'' + this.model.get('image') + '\'>');
	}
});

var WeaponStatView = Backbone.View.extend( {
	template: _.template($('#weapon-stat-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});

var BloodEchoesView = Backbone.View.extend({
	el: $('#bloodechoes'),
	initialize: function() {
		this.listenTo(finalChar, 'change:lvl', this.render);
		this.listenTo(initChar, 'change:lvl', this.render);
		this.render();
	},
	render: function() {
		var cost = levelCost(finalChar.get('lvl')) - levelCost(initChar.get('lvl'));
		if (cost < 0) cost = 0;
		this.$el.html(cost);
	}
});

var OriginSelector = Backbone.View.extend({
	el: $('#originselect'),
	events: {
		'change': 'changeOrigin'
	},
	changeOrigin: function() {
		var origin = $('#originselect option:selected').text();
		this.model.set(origins[origin]);
	}
});