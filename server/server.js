// Accounts.onCreateUser(function (options, user) {
// 	if (options.profile) {
// 		user.profile = options.profile;
// 	}

// 	return user;
// });

// Meteor.publish("userData", function () {
// 	return Meteor.users.find({ _id: this.userId }, {
// 		fields: {
// 			'role': 1
// 		}
// 	});
// });