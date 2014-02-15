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
				var region = getRegion(code);


				console.log (region.code);

				// console.log(getRegion(code).regionCode);
				Session.set('social', '10%'); // temp hack
				console.log(getRegion(code).regionCode);
				// Session.set('social', '10%'); // temp hack

				// console.log('Region: ' + (regionMap[code] || 'not in list'));
				// Session.set('social', '10%'); // temp hack
				// Fetch data from collection (state engine)
				// Session.set('currentRegion', regionMap[code]);
				Session.set('currentRegion', region.code);
				Session.set('currentRegionIndex', region.code);

				// for (var kpi in kpis) {
				// 	Session.set(kpi, Math.round(_.reduce(miniBajo.regions[regionKey].kpis[kpi].measures, function (memo, measure) {
				// 		return memo + measure.currVal;
				// 	}, 0) * 10) + '%');
				// }
			};



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
					selectedRegion: 'us',
					onRegionClick: regionEventFunction,
					// onRegionOver: regionEventFunction,
					onRegionOut: function () {
						// TODO
					}
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