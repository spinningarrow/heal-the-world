Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function () {
	this.route('index', {
		path: '/',
		template: 'index'
	});

	this.route('agency-signup', {
		path: '/agency-signup',
		template: 'agencySignup',
		before: function () {
			if (!Meteor.user()) {
				// render the login template but keep the url in the browser the same
				this.render('index');

				// stop the rest of the before hooks and the action function
				this.stop();
			}
		}
	});
});


Template.layout.events({
	'click #logout': function () {
		Meteor.logout();
		Router.go('index');
	}
});

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

Template.agencySignup.formData = function () {
	var agency = Agencies.findOne({
		owner: Meteor.userId()
	});

	return (agency ? agency.data : {});
};

Template.agencySignup.events({
	'submit #agency-form': function (event, template) {
		// event.preventDefault();

		var formData = {
			bio: template.find('#bio').value,
			website: template.find('#website').value,
			facebook: template.find('#facebook').value,
			problemTags: {
				education: template.find('#education').checked,
				health: template.find('#health').checked,
				social: template.find('#social').checked,
				environment: template.find('#environment').checked
			}
		};

		Agencies.insert({
			owner: Meteor.userId(),
			data: formData
		});

		console.log('form submitted');
	}
});