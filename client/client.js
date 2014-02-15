Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function () {
	this.route('index', {
		path: '/',
		template: 'index'
	});

	this.route('agency-signup', {
		path: '/agency-signup'
	});
});

if (Meteor.isClient) {

	Template.index.events({
		'click #agency-signup': function () {
			console.log('Agency signup clicked');
		},

		'click #play': function () {
			console.log('Play clicked');
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
