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

	this.route('agencies', {
		path: '/agencies',
		template: 'agencies',

	});

	var deferred1, deferred2, deferred3;

	this.route('play', {
		path: '/play',
		before: function () {
			if (!Meteor.user() || Meteor.user().profile.role !== 'player') {
				// render the login template but keep the url in the browser the same
				this.render('index');

				// stop the rest of the before hooks and the action function
				this.stop();
			}

			deferred1 = $.getScript('jquery.vmap.js');
			deferred2 = $.getScript('jquery.vmap.world.js');
			deferred3 = $.getScript('jquery.vmap.un_regions.js');
		},
		after: function () {

			var regionEventFunction = function (event, code, region) {
				var regionObj = getRegion(code);

				Session.set('currentRegion', regionObj.regionCode);
				Session.set('currentRegionIndex', regionObj.code);
			};

			$.when(deferred1, deferred2, deferred3).done(function () {
				$('#vmap').vectorMap({
					map: 'world_en',
					backgroundColor: '#444444',
					color: '#0000000',
					hoverOpacity: 0.2,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					scaleColors: ['#C8EEFF', '#006491'],
					normalizeFunction: 'polynomial',
					selectedRegion: 'us',
					onRegionClick: regionEventFunction
				});

				invertedRegionMap = _.clone(regionMap);
				_.each(invertedRegionMap, function (value, key, list) {
					invertedRegionMap[key] = value.code;
				});
				invertedRegionMap = _.invert(invertedRegionMap);
			});
		}
	});
});