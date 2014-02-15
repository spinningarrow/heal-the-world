// Default region
Session.set('currentRegion', 'easternAsia');

var kpis = {
	'social': true,
	'health': true,
	'environment': true,
	'literacy': true
};

function calculateKpi(kpi) {
	var regionKey = Session.get('currentRegion');
	var world = Session.get('world');

	var measures = 0;

	function x() {
                                var totalMeasure = 0;
                                for(var measure in this.measures) {
                                        totalMeasure += measure.efficacy;
                                }
                                var retVal = 0;
                                for(var measure in measures) {
                                        retVal += (measure.efficacy/totalMeasure)*measure.currVal;
                                }
                                return retVal;
                        }

	return Math.round(_.reduce(miniBajo.regions[regionKey].kpis[kpi].measures, function (memo, measure) {
		return memo + measure.currVal;
	}, 0) * 10) + '%';
}

for (var kpi in kpis) {
	Template.play[kpi] = calculateKpi.bind(null, kpi);
}

var measureButtons = {
	'social': [
		{
			id: 8,
			name: 'women',
			title: 'Promote women empowerment'
		},
		{
			id: 9,
			name: 'police',
			title: 'Increase police coverage'
		},
		{
			id: 10,
			name: 'welfare',
			title: 'Improve welfare subsidies'
		},
		{
			id: 11,
			name: 'rights',
			title: 'Increase civic rights'
		}
	],

	'health': [
		{
			id: 3,
			name: 'toilets',
			title: 'Build public toilets'
		},
		{
			id: 4,
			name: 'hospital',
			title: 'Build a hospital'
		},
		{
			id: 5,
			name: 'healthcare',
			title: 'Affordable healthcare'
		},
		{
			id: 7,
			name: 'vaccine',
			title: 'Reasearch disease vaccines'
		},
		{
			id: 6,
			name: 'amenities',
			title: 'Improve the condition of basic amenities'
		}
	],

	'literacy': [
		{
			id: 0,
			name: 'schools',
			title: 'Build a school'
		},
		{
			id: 1,
			name: 'colleges',
			title: 'Build a community college'
		},
		{
			id: 2,
			name: 'onlineCourses',
			title: 'Invest in free adult education'
		}
	],

	'environment': [
		{
			id: 12,
			name: 'emission',
			title: 'Cut carbon emissions'
		},
		{
			id: 13,
			name: 'afforestation',
			title: 'Increase forest cover'
		},
		{
			id: 14,
			name: 'habitats',
			title: 'Restore natural habitats'
		},
		{
			id: 15,
			name: 'greenTech',
			title: 'Invest in green technology'
		}
	]
};

// Template.play.social = function () {
// 	// return Session.get('social') || '50%';

// 	var regionKey = Session.get('currentRegion');

// 	return Math.round(_.reduce(miniBajo.regions[regionKey].kpis.social.measures, function (memo, measure) {
// 		return memo + measure.currVal;
// 	}, 0) * 10) + '%';

// 	// for (var kpi in kpis) {
// 	// 	Session.set(kpi, ;
// 	// }
// };

// Template.play.literacy = function () {
// 	return Session.get('literacy') || '50%';
// };

// Template.play.environment = function () {
// 	return Session.get('environment') || '50%';
// };

// Template.play.health = function () {
// 	return Session.get('health') || '50%';
// };

var measuresList = _.map(_.flatten(_.values(measureButtons)), function (obj) { return obj.id; });

Template.play.measureButtons = function () {
	return Session.get('measureButtons') || [];
};

var playEventMap = {};


for (var kpi in kpis) {
	(function (kpi) {
		playEventMap['click #progress-' + kpi] = function () {
			Session.set('measureButtons', measureButtons[kpi]);
		};
	})(kpi);
}

for (var i = 0; i < measuresList.length; i++) {
	(function (measureId) {
		playEventMap['click #measure-' + measureId] = function () {

			var world = Worlds.findOne({ player: Meteor.userId() });

			var regionNames = _.map(world.regions, function (region) {
				return region.name;
			});

			var regionIds = _.map(world.regions, function (region) {
				return region.id;
			});

			var measureNames = _.map(_.flatten(_.values(measureButtons)), function (obj) { return obj.name; });

			var measureIds = _.map(_.flatten(_.values(measureButtons)), function (obj) { return obj.id; });

			var regionMap = _.object(regionNames, regionIds);
			var measureMap = _.object(measureNames, measureIds);

			if (measureId < 3) {

				// Update current value
				world.regions[regionMap[Session.get('currentRegion')]].kpis['L'].measures[measureId].currVal += 10;

				// Update world resources
				world.resource -= 500; // TODO
			}

			else if (measureId < 8) {

				// Update current value
				world.regions[regionMap[Session.get('currentRegion')]].kpis['H'].measures[measureId].currVal += 10;

				// Update world resources
				world.resource -= 500; // TODO
			}

			else if (measureId < 12) {

				// Update current value
				world.regions[regionMap[Session.get('currentRegion')]].kpis['S'].measures[measureId].currVal += 10;

				// Update world resources
				world.resource -= 500; // TODO
			}

			else {

				// Update current value
				world.regions[regionMap[Session.get('currentRegion')]].kpis['E'].measures[measureId].currVal += 10;

				// Update world resources
				world.resource -= 500; // TODO
			}


			// Dummy variables
			// var worldResources = 2139483;
			// var currentRegion = {};

			// currentRegion[]

			console.log(measureId);
		};
	}(measuresList[i]));
}

Template.play.events(playEventMap);