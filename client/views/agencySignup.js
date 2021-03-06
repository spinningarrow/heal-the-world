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
			name: template.find('#name').value,
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

		var agency = Agencies.findOne({
			owner: Meteor.userId()
		});

		if (!agency) {
			Agencies.insert({
				owner: Meteor.userId(),
				data: formData
			});
		}

		else {
			Agencies.update({
				_id: agency._id
			}, {
				$set: {
					data: formData
				}
			});
		}



		console.log('form submitted');
	}
});