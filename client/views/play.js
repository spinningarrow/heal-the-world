function secondlyUpdate(y, fn) {
	console.log("Game state updated.");

	if (worldStateFns && worldStateFns.updateState) {
		worldStateFns.updateState();
	}

	if (regionFns && regionFns.selectRegion) {
        regionFns.selectRegion(Session.get("currentRegion"));
    }
}

function startTicker() {
	return Meteor.setInterval(function() {
		secondlyUpdate("yolo");
	}, 1000);
}

// LOTS OF HAX
// This may break
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

var gameTicker;

// Default region
Session.set('currentRegionIndex', 12);
Session.set('currentRegion', 'southEasternAsia');

// Apply game state
if (Session.get('isGamePlaying') && !gameTicker) {
	gameTicker = startTicker();
}

// ======== Handlebars Helpers ========
Handlebars.registerHelper('healthGradeBS', function (healthPercentage) {
	var percentValue = parseInt(healthPercentage);

	if (percentValue <= 33) {
		return 'danger';
	}

	else if (percentValue > 33 && percentValue <= 66) {
		return 'warning';
	}

	return 'success';
});

// ======== Data ========
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
	return Session.get('measureButtons') || measuresList.slice(8, 12);
};

Template.play.isGamePlaying = function () {
	return Session.get('isGamePlaying') || false;
};

Template.play.tickerMessage = function () {
	return Session.get('implementationResult') || 'Heal the World, make it a better place';
};

Template.play.resource = function () {
	return worldState.resource;
};

Template.play.xp = function () {
	return 1;
	// return worldState.xp();
};

Template.play.world_health = function () {
	return Math.round(worldState.worldHealth());
};

Template.play.current_region = function () {
	if (typeof regionMap !== 'undefined') {
		return regionMap[Session.get('currentRegion')].name;
	}

	return Session.get('currentRegion');
};

// ======== Events ========
var playEventsMap = {
	'click #start': function () {
		gameTicker = startTicker();

		Session.set('isGamePlaying', true);
	},

	'click #pause': function () {

		// Pause the game if it is playing
		if (gameTicker) {
			Meteor.clearInterval(gameTicker);
		}

		// Save the game state
		var currentWorld = Worlds.findOne({ player: Meteor.userId() });
		Worlds.update({ _id: currentWorld._id }, { $set: {
			state: simplify()
		} });

		Session.set('isGamePlaying', false);
	},

	'click #restart': function () {
		// Stop game
		Session.set('isGamePlaying', false);

		if (gameTicker) {
			Meteor.clearInterval(gameTicker);
		}

		// Reset game state
		complexify(defaultWorld);
	},

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

			// Save the game state
			var currentWorld = Worlds.findOne({ player: Meteor.userId() });
			Worlds.update({ _id: currentWorld._id }, { $set: {
				state: simplify()
			} });
		};
	})(i);
}

Template.play.events(playEventsMap);