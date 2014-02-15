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