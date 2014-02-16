worldState = {
	"worldHealth": function() {
		var wh = 0;
		for(var regionIndex in this.regions) {
			var region = this.regions[regionIndex];
			wh += region.popContrib * region.health();
		}
		return wh;
	},
	"worldId": "krqxzr",			//Set on user login
	"xp": function() {
		return this.measureCount()*10;
	},
	"achievements": [],
	"resource": 5000,
	"abilities": [],
	"measureCount": function() {
		var val = 0;
		for(var regionIndex in this.regions){
			var region = this.regions[regionIndex];
			val += region.measureCount();
		}
		return val;
	},
	"regions": [{
		"name": "caribbean",
		"id": 0,
		"popContrib": 0.0039,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return (1/this.healthRating()) * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3294
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3294
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3294
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3294
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6031

			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6031
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6031
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6031
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6031
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3954
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3954
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3954
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3954
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4020
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4020
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4020
			}
			]
		}
		]
	},
	{
		"name": "centralAmerica",
		"id": 1,
		"popContrib": 0.0265,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(kpiIndex in this.kpis){
				kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4345
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4345
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4345
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4345
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7776
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7776
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7776
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7776
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7776
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5363
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5363
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5363
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5363
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5196

			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5196
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5196
			}
			]
		}
		]
	},
	{
		"name": "easternAfrica",
		"id": 2,
		"popContrib": 0.0529,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2541
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2541
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2541
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2541
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3833
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3833
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3833
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3833
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3833
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3745
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3745
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3745
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3745
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2918
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2918
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2918
			}
			]
		}
		]
	},
	{
		"name": "easternAsia",
		"id": 3,
		"popContrib": 0.2283,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4627
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4627
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4627
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4627
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7371
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7371
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7371
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7371
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7371
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4372
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4372
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4372
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4372
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4889
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4889
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4889
			}
			]
		}
		]
	},
	{
		"name": "easternEurope",
		"id": 4,
		"popContrib": 0.0240,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5974
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5974
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5974
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5974
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7698
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7698
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7698
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7698
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7698
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6099
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6099
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6099
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6099
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8002
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8002
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8002
			}
			]
		}
		]
	},
	{
		"name": "middleAfrica",
		"id": 5,
		"popContrib": 0.0214,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2129
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2129
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2129
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2129
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2520
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2520
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2520
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2520
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2520
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3663
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3663
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3663
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3663
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2685
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2685
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2685
			}
			]
		}
		]
	},
	{
		"name": "northernAfrica",
		"id": 6,
		"popContrib": 0.0183,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4835
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4835
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4835
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4835
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7131
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7131
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7131
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7131
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7131
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5847
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5847
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5847
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5847
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3172
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3172
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3172
			}
			]
		}
		]
	},
	{
		"name": "northernAmerica",
		"id": 7,
		"popContrib": 0.0564,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6847
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6847
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6847
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6847
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8680
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8680
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8680
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8680
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8680
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6808
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6808
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6808
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6808
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9349
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9349
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9349
			}
			]
		}
		]
	},
	{
		"name": "northernEurope",
		"id": 8,
		"popContrib": 0.0159,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7189
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7189
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7189
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7189
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8999
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8999
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8999
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8999
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8999
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7642
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7642
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7642
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7642
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8373
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8373
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8373
			}
			]
		}
		]
	},
	{
		"name": "oceania",
		"id": 9,
		"popContrib": 0.0037,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7190
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7190
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7190
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7190
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9300
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9300
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9300
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9300
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9300
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8240
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8240
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8240
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8240
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9650
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9650
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9650
			}
			]
		}
		]
	},
	{
		"name": "southAmerica",
		"id": 10,
		"popContrib": 0.0635,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4149
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4149
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4149
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4149
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7390
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7390
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7390
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7390
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7390
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5299
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5299
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5299
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5299
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5471
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5471
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5471
			}
			]
		}
		]
	},
	{
		"name": "southCentralAsia",
		"id": 11,
		"popContrib": 0.2699,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4226
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4226
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4226
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4226
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5345
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5345
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5345
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5345
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5345
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3188
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3188
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3188
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3188
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2769
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2769
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2769
			}
			]
		}
		]
	},
	{
		"name": "southEasternAsia",
		"id": 12,
		"popContrib": 0.0841,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4296
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4296
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4296
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4296
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6790
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6790
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6790
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6790
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6790
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4398
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4398
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4398
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4398
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4799
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4799
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4799
			}
			]
		}
		]
	},
	{
		"name": "southernAfrica",
		"id": 13,
		"popContrib": 0.0009,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2388
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2388
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2388
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2388
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3913
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3913
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3913
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3913
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3913
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3386
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3386
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3386
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3386
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3951
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3951
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3951
			}
			]
		}
		]
	},
	{
		"name": "southernEurope",
		"id": 14,
		"popContrib": 0.0247,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6467
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6467
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6467
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.6467
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9079
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9079
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9079
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9079
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9079
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7387
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7387
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7387
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7387
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7578
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7578
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7578
			}
			]
		}
		]
	},
	{
		"name": "westernAfrica",
		"id": 15,
		"popContrib": 0.0498,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2856
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2856
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2856
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2856
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3252
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3252
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3252
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3252
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3252
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3702
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3702
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3702
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.3702
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2320
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2320
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.2320
			}
			]
		}
		]
	},
	{
		"name": "westernAsia",
		"id": 16,
		"popContrib": 0.0252,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4996
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4996
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4996
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4996
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7208
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7208
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7208
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7208
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7208
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5151
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5151
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5151
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.5151
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4474
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4474
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.4474
			}
			]
		}
		]
	},
	{
		"name": "westernEurope",
		"id": 17,
		"popContrib": 0.0305,
		"health": function() {
			var h = 0;
			var c = 0;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				c += kpi.totalCost();
			}
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				h += (kpi.totalCost()/c)*kpi.progress();
			}
			return h*100;
		},
		"healthRating": function() {
			if(this.health() < 40) {
				return  1;
			} else if (this.health() < 80) {
				return 2;
			} else {
				return 3;
			}
		},
		"measureCount": function() {
			var val = 0;
			for(var kpiIndex in this.kpis) {
				var kpi = this.kpis[kpiIndex];
				val += kpi.count();
			}
			return val;
		},
		"production": function() {
			return this.healthRating()*10;
		},
		"depletion": function() {
			var depl = this.healthRating() * 0.033;
			for(var kpiIndex in this.kpis){
				var kpi = this.kpis[kpiIndex];
				kpi.depletion = depl;
			}
			return this.healthRating() * 0.033;
		},
		"kpis":[{
			"name": "S",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "women",
				"id": 8,
				"depletion": 0.033,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7429
			},
			{
				"name": "police",
				"id": 9,
				"depletion": 0.033,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7429
			},
			{
				"name": "welfare",
				"id": 10,
				"depletion": 0.033,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7429
			},
			{
				"name": "rights",
				"id": 11,
				"depletion": 0.033,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7429
			},
			]
		},
		{
			"name": "H",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "toilets",
				"depletion": 0.033,
				"id":3,
				"efficacy": 1,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9207
			},
			{
				"name": "hospital",
				"depletion": 0.033,
				"id":4,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9207
			},
			{
				"name": "healthcare",
				"depletion": 0.033,
				"id":5,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9207
			},
			{
				"name": "amenities",
				"depletion": 0.033,
				"id":6,
				"efficacy": 4,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9207
			},
			{
				"name": "vaccine",
				"depletion": 0.033,
				"id":7,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.9207
			}
			]
		},
		{
			"name": "E",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "emission",
				"depletion": 0.033,
				"id":12,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7649
			},
			{
				"name": "afforestation",
				"depletion": 0.033,
				"efficacy": 3,
				"id":13,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7649
			},
			{
				"name": "habitats",
				"depletion": 0.033,
				"efficacy": 2,
				"id":14,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7649
			},
			{
				"name": "greenTech",
				"depletion": 0.033,
				"efficacy": 3,
				"id":15,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.7649
			}
			]
		},
		{
			"name": "L",
			"totalCost": function(){
				var totalCost = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalCost += measure.cost();
				}
				return totalCost;
			},
			"progress": function() {
				var totalMeasure = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					totalMeasure += measure.efficacy;
				}
				var retVal = 0;
				for(var measureIndex in this.measures){
					var measure = this.measures[measureIndex];
					retVal += (measure.efficacy/totalMeasure)*measure.currVal;
				}
				return retVal;
			},
			"count": function() {
				var count = 0;
				for(var measureIndex in this.measures){
					count += this.measures[measureIndex].count;
				}
				return count;
			},
			"severity": 1,
			"measures": [{
				"name": "schools",
				"depletion": 0.033,
				"id":0,
				"efficacy": 5,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8643
			},
			{
				"name": "colleges",
				"depletion": 0.033,
				"id":1,
				"efficacy": 3,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8643
			},
			{
				"name": "onlineCourses",
				"depletion": 0.033,
				"id":2,
				"efficacy": 2,
				"cost": function(){
					return this.efficacy*100;
				},
				"count": 0,
				"currVal": 0.8643
			}
			]
		}
		]
	}]
}




/*--------------------------------------------------------
				GAME ENGINE FUNCTIONS
---------------------------------------------------------*/

implementMeasure = function implementMeasure (regionId, measureId) {
	var message = "";
	var kpi = getKPI(measureId);
	// console.log(worldState.regions[regionId].name);
	// console.log(kpi);
	// console.log(worldState.regions[regionId].kpis);
	var measures = worldState.regions[regionId].kpis[kpi].measures;
	for(var measureIndex in measures){
		if(measures[measureIndex].id === measureId){
			var measure = measures[measureIndex];
			var cost = measure.cost();
			if(worldState.resource >= cost) {
				worldState.resource -= cost;
				measure.count++;
				if(measure.currVal < 0.9){
					measure.currVal += 0.1;
					message += getMessage(measureId, regionId);
				} else {
					measure.currVal = 1.0;
					message = "The world won't heal by just one act! ;)";
				}
				console.log(worldState.resource);
			} else {
				var issue = "";
				if(kpi == 0){issue = "social";}
				else if(kpi == 1){issue = "health & sanitation";}
				else if(kpi == 2){issue = "environmental";}
				else {issue = "education";}
				message = "Sorry! You don't seem to have enough resources to do that! :( \n";
				message += "Read more about " + issue + " issues while you wait for regeneration!";
			}
		}
	}
	if(worldState.regions[regionId].health() > 96){
		message += "\nRemember to focus on all regions!"
	}

	Session.set('implementationResult', message);
	Session.set('lastUpdate', new Date());
}

getMessage = function getMessage(measureId, regionId) {
	var region = getRegionName(regionId);
	switch(measureId){
		case 0:
			return "Children in " + region + " now have better access to education! Sharpened pencils, sharpened minds!";
		case 1:
			return "A new college just opened in " + region + "! Well done! Creating tomorrow's professionals, today.";
		case 2:
			return "News: Better free online courses lead to more sophisticated people in " + region;
		case 3:
			return "Easy access to sanitary facilities slightly improves the health of " + region;
		case 5:
			return "People jostle to access improved healthcare at cheaper costs in " + region;
		case 4:
			return "New central hospital in " + region + " has people smiling from ear to ear!";
		case 6:
			return "Cleaner water, cheaper electricity, more housing! Celebrations seen all around " + region;
		case 7:
			return "" + region + " improves efforts to research and distribute vaccines.";
		case 8:
			return "Governments of " + region + " increase the drive to empower women, by awareness and legislature.";
		case 9:
			return "Morning bulletin: Greater police coverage in " + region + " leads to drop in crime rates.";
		case 10:
			return "Welfare subsidies in " + region + " rise. The poor rejoice while the rich fear higher taxes.";
		case 11:
			return "Leaders of " + region + " announce civic reform. More freedoms promised for the people.";
		case 12:
			return "" + region + " makes concerted efforts to cut carbon emissions. Maybe the environment can still be saved."
		case 13:
			return "" + region + " goes green. Leaders of the rest of the world turn green with envy.";
		case 14:
			return "Animals in " + region + " less tense as natural habitats are announced to be restored.";
		case 15:
			return "Long-term vision of environmental efforts in " + region + " praised by industry experts.";
		default: return "" + region + " thanks your efforts!";
	}
}

getRegionName = function getRegion(regionId){
	switch(regionId){
		case 0: return "Caribbean";
		case 1: return "Central America";
		case 2: return "Eastern Africa";
		case 3: return "Eastern Asia";
		case 4: return "Eastern Europe";
		case 5: return "Middle Africa";
		case 6: return "Northern Africa";
		case 7: return "Northern America";
		case 8: return "Northern Europe";
		case 9: return "Oceania";
		case 10: return "South America";
		case 11: return "South Central Asia";
		case 12: return "South Eastern Asia";
		case 13: return "Southern Africa";
		case 14: return "Southern Europe";
		case 15: return "Western Africa";
		case 16: return "Western Asia";
		case 17: return "Western Europe";

	}
}

getKPI = function getKPI (measureId) {
	if(measureId < 3) {
		return 3;
	} else if (measureId < 8) {
		return 1;
	} else if (measureId < 12) {
		return 0;
	} else {
		return 2;
	}
}

updateState = function updateState () {
	depleteState();
	updateResource();

	Session.set('lastUpdate', new Date());
};

depleteState = function depleteState() {
	var healthMap = {};
	for(var regionIndex in worldState.regions){
		var region = worldState.regions[regionIndex];
		for(var kpiIndex in region.kpis){
			var kpi = region.kpis[kpiIndex];
			for(var measureIndex in kpi.measures){
				var measure = kpi.measures[measureIndex];
				if(measure.currVal - region.depletion() * 0.01 > 0.0){
					measure.currVal -= region.depletion() * 0.01;
				} else {
					measure.currVal = 0.0;
				}

			}
		}

		healthMap[region.name] = region.health();
	}

	updateColours(healthMap);
}

updateResource = function updateResource () {
	for(var regionIndex in worldState.regions){
		worldState.resource += worldState.regions[regionIndex].production();
	}
}


//WIP from below here
simplify = function simplify() {
	var saveState = {
		"resource":worldState.resource
	}
	var values = [];
	for(var regionIndex in worldState.regions){
		var currRegion = worldState.regions[regionIndex];
		for(var kpiIndex in currRegion.kpis){
			var currKPI = currRegion.kpis[kpiIndex];
			for(var measureIndex in currKPI.measures){
				values.push(currKPI.measures[measureIndex].currVal);
			}
		}
	}
	saveState.worldState = values;
	return saveState;
}

var defaultWorld = {
	"resource":5000,
	"worldState":[0.3294,0.3294,0.3294,0.3294,0.6031,0.6031,0.6031,0.6031,0.6031,0.3954,0.3954,0.3954,0.3954,0.402,0.402,0.402,0.4345,0.4345,0.4345,0.4345,0.7776,0.7776,0.7776,0.7776,0.7776,0.5363,0.5363,0.5363,0.5363,0.5196,0.5196,0.5196,0.2541,0.2541,0.2541,0.2541,0.3833,0.3833,0.3833,0.3833,0.3833,0.3745,0.3745,0.3745,0.3745,0.2918,0.2918,0.2918,0.4627,0.4627,0.4627,0.4627,0.7371,0.7371,0.7371,0.7371,0.7371,0.4372,0.4372,0.4372,0.4372,0.4889,0.4889,0.4889,0.5974,0.5974,0.5974,0.5974,0.7698,0.7698,0.7698,0.7698,0.7698,0.6099,0.6099,0.6099,0.6099,0.8002,0.8002,0.8002,0.2129,0.2129,0.2129,0.2129,0.252,0.252,0.252,0.252,0.252,0.3663,0.3663,0.3663,0.3663,0.2685,0.2685,0.2685,0.4835,0.4835,0.4835,0.4835,0.7131,0.7131,0.7131,0.7131,0.7131,0.5847,0.5847,0.5847,0.5847,0.3172,0.3172,0.3172,0.6847,0.6847,0.6847,0.6847,0.868,0.868,0.868,0.868,0.868,0.6808,0.6808,0.6808,0.6808,0.9349,0.9349,0.9349,0.7189,0.7189,0.7189,0.7189,0.8999,0.8999,0.8999,0.8999,0.8999,0.7642,0.7642,0.7642,0.7642,0.8373,0.8373,0.8373,0.719,0.719,0.719,0.719,0.93,0.93,0.93,0.93,0.93,0.824,0.824,0.824,0.824,0.965,0.965,0.965,0.4149,0.4149,0.4149,0.4149,0.739,0.739,0.739,0.739,0.739,0.5299,0.5299,0.5299,0.5299,0.5471,0.5471,0.5471,0.4226,0.4226,0.4226,0.4226,0.5345,0.5345,0.5345,0.5345,0.5345,0.3188,0.3188,0.3188,0.3188,0.2769,0.2769,0.2769,0.4296,0.4296,0.4296,0.4296,0.679,0.679,0.679,0.679,0.679,0.4398,0.4398,0.4398,0.4398,0.4799,0.4799,0.4799,0.2388,0.2388,0.2388,0.2388,0.3913,0.3913,0.3913,0.3913,0.3913,0.3386,0.3386,0.3386,0.3386,0.3951,0.3951,0.3951,0.6467,0.6467,0.6467,0.6467,0.9079,0.9079,0.9079,0.9079,0.9079,0.7387,0.7387,0.7387,0.7387,0.7578,0.7578,0.7578,0.2856,0.2856,0.2856,0.2856,0.3252,0.3252,0.3252,0.3252,0.3252,0.3702,0.3702,0.3702,0.3702,0.232,0.232,0.232,0.4996,0.4996,0.4996,0.4996,0.7208,0.7208,0.7208,0.7208,0.7208,0.5151,0.5151,0.5151,0.5151,0.4474,0.4474,0.4474,0.7429,0.7429,0.7429,0.7429,0.9207,0.9207,0.9207,0.9207,0.9207,0.7649,0.7649,0.7649,0.7649,0.8643,0.8643,0.8643]
}

complexify = function complexify (saveState) {
	var totValChanged = 0;
	worldState.resource = saveState.resource;
	var values = saveState.worldState;
//	console.log(values);
	for(var regionIndex in worldState.regions) {
		var region = worldState.regions[regionIndex];
		for(var kpiIndex in region.kpis){
			var kpi = region.kpis[kpiIndex];
			for(var measureIndex in kpi.measures){
//				console.log(kpi.measures[measureIndex].currVal + " " + values[totValChanged]);
				kpi.measures[measureIndex].currVal = values[totValChanged];
				totValChanged++;
			}
		}
	}
//	console.log(totValChanged);
}

worldStateFns = {
	updateState: updateState
};