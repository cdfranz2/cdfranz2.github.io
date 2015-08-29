var origins = 
	{
		"Milquetoast": {lvl: 10, vit: 11, end: 10, str: 12, ski: 10, bld: 9, arc: 8},
		"Lone Survivor": {lvl: 10, vit: 14, end: 11, str: 11, ski: 10, bld: 7, arc: 7},
		"Troubled Childhood": {lvl: 10, vit: 9, end: 14, str: 9, ski: 13, bld: 6, arc: 9},
		"Violent Past": {lvl: 10, vit: 12, end: 11, str: 15, ski: 9, bld: 6, arc: 7},
		"Professional": {lvl: 10, vit: 9, end: 12, str: 9, ski: 15, bld: 7, arc: 8} ,
		"Military Veteran": {lvl: 10, vit: 10, end: 10, str: 14, ski: 13, bld: 7, arc: 6},
		"Noble Scion": {lvl: 10, vit: 7, end: 8, str: 9, ski: 13, bld: 14, arc: 9},
		"Cruel Fate": {lvl: 10, vit: 10, end: 12, str: 10, ski: 9, bld: 5, arc: 14},
		"Waste of Skin": {lvl: 4, vit: 10, end: 9, str: 10, ski: 9, bld: 7, arc: 9}
	};

var Character = Backbone.Model.extend( {
	defaults: {
		lvl: 0,
		vit: 0,
		end: 0,
		str: 0,
		ski: 0,
		bld: 0,
		arc: 0,
		//dependent on above stats; not user selected
		hp: 0,
		stam: 0,
		disc: 0,
		physdef: 0,
		slowpois: 0,
		rapidpois: 0,
		frenzy: 0,
		beasthood: 0,

		// reference to another Character instance; used for data validation
		startpoint: null

	},
	initialize: function() {
		this.on('change:vit change:end change:str change:ski change:bld change:arc', this.updateLevel);
		this.on('change:vit', function(){
			this.set('hp', hpInfo[this.get('vit')]);
		});
		this.on('change:end', function(){
			this.set('stam', stamInfo[this.get('end')]);
			this.set('slowpois', poisInfo[this.get('end')]);
			this.set('rapidpois', poisInfo[this.get('end')]);
		});
		this.on('change:str change:ski change:bld change:arc', this.updateAtk);
		this.on('change:arc', function(){
			this.set('disc', discInfo[this.get('arc')]);
		});
		this.on('change:lvl', function(){
			this.set('physdef', physdefInfo[this.get('lvl')]);
		});
		this.updateAll();
	},
	updateLevel: function() {
		var newLevel = this.get('vit') + this.get('end') + this.get('str') + this.get('ski') + this.get('bld') + this.get('arc') - 50;
		if (newLevel < 0) newLevel = 0;
		this.set('lvl', newLevel);
	},
	updateAll: function() {
		this.set('hp', hpInfo[this.get('vit')]);
		this.set('stam', stamInfo[this.get('end')]);
		this.set('slowpois', poisInfo[this.get('end')]);
		this.set('rapidpois', poisInfo[this.get('end')]);
		this.set('disc', discInfo[this.get('arc')]);
		this.set('physdef', physdefInfo[this.get('lvl')]);
		this.updateLevel();
	},
	//checks that these stats are higher than the initial stats
	validate: function(stat) {
		if (this.startpoint === null) return true;
		return (this.get(stat) <= 99 && this.get(stat) >= this.get('startpoint').get(stat));
	},
	validateAll: function() {
		return (this.validate('vit') &&
				this.validate('end') &&
				this.validate('str') &&
				this.validate('ski') &&
				this.validate('bld') &&
				this.validate('arc'));
	},

	reset: function() {
		var startpoint = this.get('startpoint');
		var newStats = {};
		newStats.vit = startpoint.get('vit');
		newStats.end = startpoint.get('end');
		newStats.str = startpoint.get('str');
		newStats.ski = startpoint.get('ski');
		newStats.bld = startpoint.get('bld');
		newStats.arc = startpoint.get('arc');
		this.set(newStats);
	}
});

var Weapon = Backbone.Model.extend( {
	defaults: {
		name: '',
		hand: '',
		lvl: 0,
		strscl: 'E',
		skiscl: 'E',
		bldscl: 'E',
		arcscl: 'E',
		baseatk: 0,
		finalatk: 0,
		character: null,
		image: '',

		//an array of objects with stats for each upgrade level, indexed 0 to 10
		scalingInfo: null
	},
	initialize: function() {
		this.on('change:lvl', function() {
			this.set(this.get('scalingInfo')[this.get('lvl')]);
			this.updateAtk();
		});
		this.on('change:name', function() {
			this.set('scalingInfo', weaponInfo[this.get('name')]);
			this.set(this.get('scalingInfo')[this.get('lvl')]);
			this.updateAtk();
		});
		this.on('change:name', function() {
			this.set('image', weaponImgs[this.get('name')]);
		});
		this.listenTo(this.get('character'), 'change', this.updateAtk);
		this.set(this.get('scalingInfo')[this.get('lvl')]);
		this.updateAtk();
	},
	updateAtk: function() {
		//Final Attack = Base Attack + (Base Attack * Scaling Ratio * Attribute Rating)
		var character = this.get('character');
		if (character === undefined)
		{
			this.set('baseatk', 0);
			this.set('finalatk', 0);
		}
		else
		{
			var base = this.get('baseatk');
			var newFinal = this.get('baseatk');
			if (this.get('strscl') !== '-')
				newFinal += (base * scalingRatio[this.get('strscl')] * attributeRating[character.get('str')]);
			if (this.get('skiscl') !== '-')
				newFinal += (base * scalingRatio[this.get('skiscl')] * attributeRating[character.get('ski')]);
			if (this.get('bldscl') !== '-')
				newFinal += (base * scalingRatio[this.get('bldscl')] * attributeRating[character.get('bld')]);
			if (this.get('arcscl') !== '-')
				newFinal += (base * scalingRatio[this.get('arcscl')] * attributeRating[character.get('arc')]);
			this.set('finalatk', Math.floor(newFinal));
		}
	},
});


var Weapons = Backbone.Collection.extend( {
	model: Weapon
});