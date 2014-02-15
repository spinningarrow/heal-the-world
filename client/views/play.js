Template.play.social = function () {
	return Session.get('social') || '50%';
};

Template.play.literacy = function () {
	return Session.get('literacy') || '50%';
};

Template.play.environment = function () {
	return Session.get('environment') || '50%';
};

Template.play.health = function () {
	return Session.get('health') || '50%';
};

Template.play.measureButtons = function () {
	return Session.get('measureButtons') || [{ name: 'whatevs' }];
};

Template.play.events({
	'click #progress-social': function () {
		Session.set('measureButtons', [
			{ name: 'Promote women empowerment' },
			{ name: 'Increase police coverage' },
			{ name: 'Improve welfare subsidies' },
			{ name: 'Increase civic rights' }
		]);
	},

	'click #progress-literacy': function () {
		Session.set('measureButtons', [
			{ name: 'Build a school' },
			{ name: 'Build a community college' },
			{ name: 'Invest in free adult education' }
		]);
	},

	'click #progress-health': function () {
		Session.set('measureButtons', [
			{ name: 'Build public toilets' },
			{ name: 'Build a hospital' },
			{ name: 'Affordable healthcare' },
			{ name: 'Reasearch disease vaccines' },
			{ name: 'Improve the condition of basic amenities' }
		]);
	},

	'click #progress-environment': function () {
		Session.set('measureButtons', [
			{ name: 'Cut carbon emissions' },
			{ name: 'Increase forest cover' },
			{ name: 'Restore natural habitats' },
			{ name: 'Invest in green technology' }
		]);
	}
});