// Default region
Session.set('currentRegionIndex', 12);

var kpis = {
	'social': true,
	'health': true,
	'environment': true,
	'literacy': true
};

function calculateKpi(kpi) {
	var regionKey = Session.get('currentRegion');

	return Math.round(_.reduce(miniBajo.regions[regionKey].kpis[kpi].measures, function (memo, measure) {
		return memo + measure.currVal;
	}, 0) * 10) + '%';
}

for (var kpi in kpis) {
	Template.play[kpi] = calculateKpi.bind(null, kpi);
}

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

Template.play.lastUpdate = function () {
	return Session.get('lastUpdate');
};

Template.play.social = function () {
	var currentRegionIndex = Session.get('currentRegionIndex') || 0;
	return Math.round(worldState.regions[currentRegionIndex].kpis[0].progress() * 100) + '%';
};

Template.play.health = function () {
	var currentRegionIndex = Session.get('currentRegionIndex') || 0;
	return Math.round(worldState.regions[currentRegionIndex].kpis[1].progress() * 100) + '%';
};

Template.play.environment = function () {
	var currentRegionIndex = Session.get('currentRegionIndex') || 0;
	return Math.round(worldState.regions[currentRegionIndex].kpis[2].progress() * 100) + '%';
};

Template.play.literacy = function () {
	var currentRegionIndex = Session.get('currentRegionIndex') || 0;
	return Math.round(worldState.regions[currentRegionIndex].kpis[3].progress() * 100) + '%';
};

Template.play.measureButtons = function () {
	return Session.get('measureButtons') || [];
};

function secondlyUpdate(y, fn)
{
	console.log("yolo");
	console.log(worldState);
	console.log(worldStateFns);

	if (worldStateFns && worldStateFns.updateState) {
		worldStateFns.updateState();
	}
	// fn();
}

Meteor.setInterval(function() {
	secondlyUpdate("yolo");
}, 1000);

// LOTS OF HAX
// This will break
var measuresList = [
	{ id: 0, name: 'Build a school' },
	{ id: 1, name: 'Build a community college' },
	{ id: 2, name: 'Invest in free adult education' },
	{ id: 3, name: 'Build public toilets' },
	{ id: 4, name: 'Build a hospital' },
	{ id: 5, name: 'Affordable healthcare' },
	{ id: 6, name: 'Improve the condition of basic amenities' },
	{ id: 7, name: 'Research disease vaccines' },
	{ id: 8, name: 'Promote women empowerment' },
	{ id: 9, name: 'Increase police coverage' },
	{ id: 10, name: 'Improve welfare subsidies' },
	{ id: 11, name: 'Increase civic rights' },
	{ id: 12, name: 'Cut carbon emissions' },
	{ id: 13, name: 'Increase forest cover' },
	{ id: 14, name: 'Restore natural habitats' },
	{ id: 15, name: 'Invest in green technology' }
];

var playEventsMap = {
	'click #progress-social': function () {
		Session.set('measureButtons', measuresList.slice(8, 12));
	},

	'click #progress-literacy': function () {
		Session.set('measureButtons', measuresList.slice(0, 3));
	},

	'click #progress-health': function () {
		Session.set('measureButtons', measuresList.slice(3, 8));
	},

	'click #progress-environment': function () {
		Session.set('measureButtons', measuresList.slice(12, 16));
	}
};

for (var i = 0; i < measuresList.length; i++) {
	(function (measureId) {
		playEventsMap['click #measure-' + measureId] = function () {
			implementMeasure(Session.get('currentRegionIndex'), measureId);
		};
	})(i);
}

Template.play.events(playEventsMap);