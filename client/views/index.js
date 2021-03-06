Template.index.events({
	'click #agency-signup': function () {

		if (!Meteor.user()) {
			Meteor.loginWithFacebook(function (error) {

				if (error) {

					console.log('Facebook login error occurred.');
					return;
				}

				if (Meteor.user().profile && !Meteor.user().profile.role) {

					Meteor.users.update({ _id: Meteor.userId() }, {
						$set: {
							'profile.role': 'agency'
						}
					});
				}

				Session.set('currentUserType', 'agency');
				Router.go('/agency-signup');
			});
		} else {

			Session.set('currentUserType', 'agency');
			Router.go('/agency-signup');
		}
	},

	'click #play': function () {

		if (!Meteor.user()) {
			Meteor.loginWithFacebook(function (error) {

				if (error) {

					console.log('Facebook login error occurred.');
					return;
				}

				if (Meteor.user().profile && !Meteor.user().profile.role) {

					Meteor.users.update({ _id: Meteor.userId() }, {
						$set: {
							'profile.role': 'player'
						}
					});
				}

				// Create new world or load world
				var world = Worlds.findOne({ player: Meteor.userId() });

				if (!world) {
					console.log('no world found');

					Worlds.insert({
						player: Meteor.userId(),
						state: simplify()
					});
				}

				else {
					console.log('world found');

					var userWorld = Worlds.findOne({
						player: Meteor.userId()
					});

					complexify(userWorld.state);
				}

				Session.set('currentUserType', 'player');
				Router.go('/play');
			});
		} else {
			Session.set('currentUserType', 'player');
			Router.go('/play');
		}
	},
	'click #agencies': function () {
		Router.go('/agencies');
	}
});