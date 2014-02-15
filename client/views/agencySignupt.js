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