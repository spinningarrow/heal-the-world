Template.layout.fbUsername = function () {
	if (Meteor.user() && Meteor.user().services.facebook) {
		return Meteor.user().services.facebook.username;
	}

	return null;
};

Template.layout.events({
	'click #logout': function () {
		Meteor.logout();
		Router.go('index');
	}
});