Agencies = new Meteor.Collection('agencies');
Worlds = new Meteor.Collection('worlds');

Meteor.users.allow({
	update: function (userId, doc, fieldNames, modifier) {
		return doc._id === userId;
		// return true;
		// if (doc._id === userId) {
		// 	Meteor.users.update({ _id: userId }, modifier);
		// 	return true;
		// }

		// return false;
	}
});