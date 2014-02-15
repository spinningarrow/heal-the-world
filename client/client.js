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

	var deferred1, deferred2, deferred3;

	this.route('play', {
		path: '/play',
		before: function () {
			deferred1 = $.getScript('jquery.vmap.js');
			deferred2 = $.getScript('jquery.vmap.world.js');
			deferred3 = $.getScript('jquery.vmap.un_regions.js');
		},
		after: function () {

			var regionEventFunction = function (event, code, region) {
				console.log(region);
				Session.set('social', '10%'); // temp hack
				// Fetch data from collection (state engine)
			}

			$.when(deferred1, deferred2, deferred3).done(function () {
				$('#vmap').vectorMap({
					map: 'world_en',
					backgroundColor: '#333333',
					color: '#ffffff',
					hoverOpacity: 0.2,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					scaleColors: ['#C8EEFF', '#006491'],
					normalizeFunction: 'polynomial',
					onRegionClick: regionEventFunction,
					onRegionOver: regionEventFunction,
					onRegionOut: function () {
						// TODO
					}
				});
			})
		}
	});
});