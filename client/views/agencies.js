Template.agencies.agencies = function () {
	return Agencies.find().fetch();
};

Handlebars.registerHelper('fbId', function (fbUrl) {
	var matches = fbUrl.match(/facebook\.com\/(.+)\/?/);
	return matches && matches[1];
});