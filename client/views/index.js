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

				Router.go('/agency-signup');
			});
		} else {
			Router.go('/agency-signup');
		}

	},

	'click #play': function () {
		console.log('Play clicked');
	}
});