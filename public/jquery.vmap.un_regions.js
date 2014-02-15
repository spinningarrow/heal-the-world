var countryMap = {
	"bi": "easternAfrica",
	"km": "easternAfrica",
	"dj": "easternAfrica",
	"er": "easternAfrica",
	"et": "easternAfrica",
	"ke": "easternAfrica",
	"mg": "easternAfrica",
	"mw": "easternAfrica",
	"mu": "easternAfrica",
	"mz": "easternAfrica",
	"re": "easternAfrica",
	"rw": "easternAfrica",
	"sc": "easternAfrica",
	"so": "easternAfrica",
	"ug": "easternAfrica",
	"tz": "easternAfrica",
	"zm": "easternAfrica",
	"zw": "easternAfrica",

	"ao": "middleAfrica",
	"cm": "middleAfrica",
	"cf": "middleAfrica",
	"td": "middleAfrica",
	"cg": "middleAfrica",
	"cd": "middleAfrica",
	"gq": "middleAfrica",
	"ga": "middleAfrica",
	"st": "middleAfrica",

	"dz": "northernAfrica",
	"eg": "northernAfrica",
	"ly": "northernAfrica",
	"ma": "northernAfrica",
	"sd": "northernAfrica",
	"tn": "northernAfrica",

	"bw": "southernAfrica",
	"ls": "southernAfrica",
	"na": "southernAfrica",
	"za": "southernAfrica",
	"sz": "southernAfrica",

	"bj": "westernAfrica",
	"bf": "westernAfrica",
	"cv": "westernAfrica",
	"ci": "westernAfrica",
	"gm": "westernAfrica",
	"gh": "westernAfrica",
	"gn": "westernAfrica",
	"gw": "westernAfrica",
	"lr": "westernAfrica",
	"ml": "westernAfrica",
	"mr": "westernAfrica",
	"ne": "westernAfrica",
	"ng": "westernAfrica",
	"sn": "westernAfrica",
	"sl": "westernAfrica",
	"tg": "westernAfrica",

	"cn": "easternAsia",
	"tw": "easternAsia",
	"kp": "easternAsia",
	"jp": "easternAsia",
	"mn": "easternAsia",
	"kr": "easternAsia",

	"af": "southCentralAsia",
	"bd": "southCentralAsia",
	"bt": "southCentralAsia",
	"in": "southCentralAsia",
	"ir": "southCentralAsia",
	"kz": "southCentralAsia",
	"kg": "southCentralAsia",
	"mv": "southCentralAsia",
	"np": "southCentralAsia",
	"pk": "southCentralAsia",
	"lk": "southCentralAsia",
	"tj": "southCentralAsia",
	"tm": "southCentralAsia",
	"uz": "southCentralAsia",

	"bn":"southEasternAsia",
	"kh":"southEasternAsia",
	"tl":"southEasternAsia",
	"id":"southEasternAsia",
	"la":"southEasternAsia",
	"my":"southEasternAsia",
	"mm":"southEasternAsia",
	"ph":"southEasternAsia",
	"th":"southEasternAsia",
	"vn":"southEasternAsia",

	"az":"westernAsia",
	"am":"westernAsia",
	"cy":"westernAsia",
	"ge":"westernAsia",
	"iq":"westernAsia",
	"il":"westernAsia",
	"jo":"westernAsia",
	"kw":"westernAsia",
	"lb":"westernAsia",
	"om":"westernAsia",
	"qa":"westernAsia",
	"sa":"westernAsia",
	"sy":"westernAsia",
	"tr":"westernAsia",
	"ae":"westernAsia",
	"ye":"westernAsia",

	"by":"easternEurope",
	"bg":"easternEurope",
	"cz":"easternEurope",
	"hu":"easternEurope",
	"pl":"easternEurope",
	"md":"easternEurope",
	"ro":"easternEurope",
	"ru":"easternEurope",
	"sk":"easternEurope",
	"ua":"easternEurope",

	"dk":"northernEurope",
	"ee":"northernEurope",
	"fi":"northernEurope",
	"is":"northernEurope",
	"ie":"northernEurope",
	"lv":"northernEurope",
	"lt":"northernEurope",
	"no":"northernEurope",
	"se":"northernEurope",
	"gb":"northernEurope",

	"al":"southernEurope",
	"ba":"southernEurope",
	"hr":"southernEurope",
	"gr":"southernEurope",
	"it":"southernEurope",
	"mt":"southernEurope",
	"pt":"southernEurope",
	"si":"southernEurope",
	"es":"southernEurope",
	"mk":"southernEurope",
	"rs":"southernEurope",

	"at":"westernEurope",
	"be":"westernEurope",
	"fr":"westernEurope",
	"de":"westernEurope",
	"nl":"westernEurope",
	"ch":"westernEurope",

	"bs":"caribbean",
	"dm":"caribbean",
	"ag":"caribbean",
	"ds":"caribbean",
	"bb":"caribbean",
	"cu":"caribbean",
	"dn":"caribbean",
	"do":"caribbean",
	"gd":"caribbean",
	"ht":"caribbean",
	"jm":"caribbean",
	"kn":"caribbean",
	"lc":"caribbean",
	"tt":"caribbean",

	"bz":"centralAmerica",
	"cr":"centralAmerica",
	"sv":"centralAmerica",
	"gt":"centralAmerica",
	"hn":"centralAmerica",
	"mx":"centralAmerica",
	"ni":"centralAmerica",
	"pa":"centralAmerica",


	"ar":"southAmerica",
	"bo":"southAmerica",
	"br":"southAmerica",
	"cl":"southAmerica",
	"co":"southAmerica",
	"ec":"southAmerica",
	"fk":"southAmerica",
	"gy":"southAmerica",
	"gf":"southAmerica",
	"pe":"southAmerica",
	"py":"southAmerica",
	"sr":"southAmerica",
	"uy":"southAmerica",
	"ve":"southAmerica",

	"ca":"northernAmerica",
	"gl":"northernAmerica",
	"us":"northernAmerica",

	"au":"oceania",
	"nz":"oceania",
	"fj":"oceania",
	"sb":"oceania",
	"pg":"oceania",
	"vu":"oceania",
	"nc":"oceania",
	"pf":"oceania"
};
var regionMap = {
	"easternAfrica" : {
		"countries" : ["bi", "km", "dj", "er", "et", "ke", "mg", "mw", "mu", "mz", "re", "rw", "sc", "so", "ug", "tz", "zm", "zw"],
		"name" : "Eastern Africa",
		"regionCode" : "easternAfrica",
		"code" : 2
	},
	"middleAfrica" : {
		"countries" : ["ao", "cm", "cf", "td", "cg", "cd", "gq", "ga", "st"],
		"name" : "Middle Africa",
		"regionCode" : "middleAfrica",
		"code" : 5
	},
	"northernAfrica" :{
		"countries" : ["dz", "eg", "ly", "ma", "sd", "tn"],
		"name" : "Northern Africa",
		"regionCode" : "northernAfrica",
		"code" : 6
	},
	"southernAfrica" :{
		"countries" : ["bw", "ls", "na", "za", "sz"],
		"name" : "Southern Africa",
		"regionCode" : "southernAfrica",
		"code" : 13
	},
	"westernAfrica" : {
		"countries" : ["bj", "bf", "cv", "ci", "gm", "gh", "gn", "gw", "lr", "ml", "mr", "ne", "ng", "sn", "sl", "tg"],
		"name" : " Western Africa",
		"regionCode" : "westernAfrica",
		"code" : 15
	},
	"easternAsia" : {
		"countries" : ["cn", "kp", "jp", "mn", "kr", "tw"],
		"name" : "Eastern Asia",
		"regionCode" : "easternAsia",
		"code" : 3
	},
	"southCentralAsia" : {
		"countries" : ["af", "bd", "bt", "in", "ir", "kz", "kg", "mv", "np", "pk", "lk", "tj", "tm", "uz"],
		"name" : "South Central Asia",
		"regionCode" : "southCentralAsia",
		"code" : 11
	},
	"southEasternAsia" : {
		"countries" : ["bn", "kh", "tl", "id", "la", "my", "mm", "ph", "th", "vn"],
		"name" : "South Eastern Asia",
		"regionCode" : "southEasternAsia",
		"code" : 12
	},
	"westernAsia" : {
		"countries" : ["az", "am", "cy", "ge", "iq", "il", "jo", "kw", "lb", "om", "qa", "sa", "sy", "tr", "ae", "ye"],
		"name" : "Western Asia",
		"regionCode" : "westernAsia",
		"code" : 16
	},
	"easternEurope" : {
		"countries" : ["by", "bg", "cz", "hu", "pl", "md", "ro", "ru", "sk", "ua"],
		"name" : "Eastern Europe",
		"regionCode" : "easternEurope",
		"code" : 4
	},
	"northernEurope" : {
		"countries" : ["dk", "ee", "fi", "is", "ie", "lv", "lt", "no", "se", "gb"],
		"name" : "Northern Europe",
		"regionCode" : "northernEurope",
		"code" : 8
	},
	"southernEurope" : {
		"countries" : ["al", "ba", "hr", "gr", "it", "mt", "pt", "si", "es", "mk", "rs"],
		"name" : "Southern Europe",
		"regionCode" : "southernEurope",
		"code" : 14
	},
	"westernEurope" :{
		"countries" : ["at", "be", "fr", "de", "nl", "ch"],
		"name" : "Western Europe",
		"regionCode" : "westernEurope",
		"code" : 17
	},
	"caribbean" : {
		"countries" : ["bs", "dm", "ag", "ds", "bb", "cu", "dn", "do", "gd", "ht", "jm", "kn", "lc", "tt"],
		"name" : "Caribbean",
		"regionCode" : "caribbean",
		"code" : 0
	},
	"centralAmerica" :{
		"countries" : ["bz", "cr", "sv", "gt", "hn", "mx", "ni", "pa"],
		"name" : "Central America",
		"regionCode" : "centralAmerica",
		"code" : 1
	},
	"southAmerica" :{
		"countries" : ["ar", "bo", "br", "cl", "co", "ec", "fk", "gy", "gf", "pe", "py", "sr", "uy", "ve"],
		"name" : "South America",
		"regionCode" : "southAmerica",
		"code" : 10
	},
	"northernAmerica" :{
		"countries" : ["ca", "gl", "us"],
		"name" : "Northern America",
		"regionCode" : "northernAmerica",
		"code" : 7
	},
	"oceania" :{
		"countries" : ["au", "nz", "fj", "sb", "pg", "vu", "nc", "pf"],
		"name" : "Oceania",
		"regionCode" : "oceania",
		"code" : 9
	},
};

function getCountriesInRegion(cc) {
	for (var regionKey in regions)
	{
		var region = regions[regionKey];
		var countries = region["countries"];
		// console.log(region.toString());
		// console.log(countries.toString());
		for(var countryIndex in countries)
		{
			// console.log(countryIndex);
			// console.log(countries[countryIndex].toString());
			if (cc == countries[countryIndex])
			{
				// console.log(countries.toString());

				return countries;
			}
		}
	}
}

function getRegion(cc) {
	var regionCode = countryMap[cc];
	return regionMap[regionCode];
}

function updateColours (data)
{
	var max = 0,
		min = 100,
		startColor = [200, 238, 255],
		endColor = [0, 100, 145],
		colors = {},
		hex;

	for (regionKey in data)
	{
		var regionInfo = data[regionKey];
		// console.log ("yea" + regionKey);
		// console.log(regionInfo);
		var region = regionMap[regionKey];
		// console.log (region);
		var countries = region["countries"];
		// console.log(countries.toString());
		for (cc in countries)
		{
			colors[countries[cc]] = '#';
			for (var i = 0; i<3; i++)
			{
				hex = Math.round(startColor[i]
					+ (endColor[i]
					- startColor[i])
					* (regionInfo["health"] / (100.0))).toString(16);

				if (hex.length == 1)
				{
					hex = '0'+hex;
				}

				colors[countries[cc]] += (hex.length == 1 ? '0' : '') + hex;
			}
		}
	}
	console.log(colors.toString());
	//initialize JQVMap
	jQuery('#vmap').vectorMap(
	{
		colors: colors,
		hoverOpacity: 0.7,
		hoverColor: false
	});
	console.log("bye");
}

function test()
{
	var gdpData = {"af":"16.63","al":"11.58","dz":"158.97","ao":"85.81","ag":"1.1","ar":"351.02","am":"8.83","au":"1219.72","at":"366.26","az":"52.17","bs":"7.54","bh":"21.73","bd":"105.4","bb":"3.96","by":"52.89","be":"461.33","bz":"1.43","bj":"6.49","bt":"1.4","bo":"19.18","ba":"16.2","bw":"12.5","br":"2023.53","bn":"11.96","bg":"44.84","bf":"8.67","bi":"1.47","kh":"11.36","cm":"21.88","ca":"1563.66","cv":"1.57","cf":"2.11","td":"7.59","cl":"199.18","cn":"5745.13","co":"283.11","km":"0.56","cd":"12.6","cg":"11.88","cr":"35.02","ci":"22.38","hr":"59.92","cy":"22.75","cz":"195.23","dk":"304.56","dj":"1.14","dm":"0.38","do":"50.87","ec":"61.49","eg":"216.83","sv":"21.8","gq":"14.55","er":"2.25","ee":"19.22","et":"30.94","fj":"3.15","fi":"231.98","fr":"2555.44","ga":"12.56","gm":"1.04","ge":"11.23","de":"3305.9","gh":"18.06","gr":"305.01","gd":"0.65","gt":"40.77","gn":"4.34","gw":"0.83","gy":"2.2","ht":"6.5","hn":"15.34","hk":"226.49","hu":"132.28","is":"12.77","in":"1430.02","id":"695.06","ir":"337.9","iq":"84.14","ie":"204.14","il":"201.25","it":"2036.69","jm":"13.74","jp":"5390.9","jo":"27.13","kz":"129.76","ke":"32.42","ki":"0.15","kr":"986.26","undefined":"5.73","kw":"117.32","kg":"4.44","la":"6.34","lv":"23.39","lb":"39.15","ls":"1.8","lr":"0.98","ly":"77.91","lt":"35.73","lu":"52.43","mk":"9.58","mg":"8.33","mw":"5.04","my":"218.95","mv":"1.43","ml":"9.08","mt":"7.8","mr":"3.49","mu":"9.43","mx":"1004.04","md":"5.36","mn":"5.81","me":"3.88","ma":"91.7","mz":"10.21","mm":"35.65","na":"11.45","np":"15.11","nl":"770.31","nz":"138","ni":"6.38","ne":"5.6","ng":"206.66","no":"413.51","om":"53.78","pk":"174.79","pa":"27.2","pg":"8.81","py":"17.17","pe":"153.55","ph":"189.06","pl":"438.88","pt":"223.7","qa":"126.52","ro":"158.39","ru":"1476.91","rw":"5.69","ws":"0.55","st":"0.19","sa":"434.44","sn":"12.66","rs":"38.92","sc":"0.92","sl":"1.9","sg":"217.38","sk":"86.26","si":"46.44","sb":"0.67","za":"354.41","es":"1374.78","lk":"48.24","kn":"0.56","lc":"1","vc":"0.58","sd":"65.93","sr":"3.3","sz":"3.17","se":"444.59","ch":"522.44","sy":"59.63","tw":"426.98","tj":"5.58","tz":"22.43","th":"312.61","tl":"0.62","tg":"3.07","to":"0.3","tt":"21.2","tn":"43.86","tr":"729.05","tm":0,"ug":"17.12","ua":"136.56","ae":"239.65","gb":"2258.57","us":"14624.18","uy":"40.71","uz":"37.72","vu":"0.72","ve":"285.21","vn":"101.99","ye":"30.02","zm":"15.69","zw":"5.57"};
	var sample_data = {"af":"16.63","al":"11.58","dz":"158.97","ao":"85.81","ag":"1.1","ar":"351.02","am":"8.83","au":"1219.72","at":"366.26","az":"52.17","bs":"7.54","bh":"21.73","bd":"105.4","bb":"3.96","by":"52.89","be":"461.33","bz":"1.43","bj":"6.49","bt":"1.4","bo":"19.18","ba":"16.2","bw":"12.5","br":"2023.53","bn":"11.96","bg":"44.84","bf":"8.67","bi":"1.47","kh":"11.36","cm":"21.88","ca":"1563.66","cv":"1.57","cf":"2.11","td":"7.59","cl":"199.18","cn":"5745.13","co":"283.11","km":"0.56","cd":"12.6","cg":"11.88","cr":"35.02","ci":"22.38","hr":"59.92","cy":"22.75","cz":"195.23","dk":"304.56","dj":"1.14","dm":"0.38","do":"50.87","ec":"61.49","eg":"216.83","sv":"21.8","gq":"14.55","er":"2.25","ee":"19.22","et":"30.94","fj":"3.15","fi":"231.98","fr":"2555.44","ga":"12.56","gm":"1.04","ge":"11.23","de":"3305.9","gh":"18.06","gr":"305.01","gd":"0.65","gt":"40.77","gn":"4.34","gw":"0.83","gy":"2.2","ht":"6.5","hn":"15.34","hk":"226.49","hu":"132.28","is":"12.77","in":"1430.02","id":"695.06","ir":"337.9","iq":"84.14","ie":"204.14","il":"201.25","it":"2036.69","jm":"13.74","jp":"5390.9","jo":"27.13","kz":"129.76","ke":"32.42","ki":"0.15","kr":"986.26","undefined":"5.73","kw":"117.32","kg":"4.44","la":"6.34","lv":"23.39","lb":"39.15","ls":"1.8","lr":"0.98","ly":"77.91","lt":"35.73","lu":"52.43","mk":"9.58","mg":"8.33","mw":"5.04","my":"218.95","mv":"1.43","ml":"9.08","mt":"7.8","mr":"3.49","mu":"9.43","mx":"1004.04","md":"5.36","mn":"5.81","me":"3.88","ma":"91.7","mz":"10.21","mm":"35.65","na":"11.45","np":"15.11","nl":"770.31","nz":"138","ni":"6.38","ne":"5.6","ng":"206.66","no":"413.51","om":"53.78","pk":"174.79","pa":"27.2","pg":"8.81","py":"17.17","pe":"153.55","ph":"189.06","pl":"438.88","pt":"223.7","qa":"126.52","ro":"158.39","ru":"1476.91","rw":"5.69","ws":"0.55","st":"0.19","sa":"434.44","sn":"12.66","rs":"38.92","sc":"0.92","sl":"1.9","sg":"217.38","sk":"86.26","si":"46.44","sb":"0.67","za":"354.41","es":"1374.78","lk":"48.24","kn":"0.56","lc":"1","vc":"0.58","sd":"65.93","sr":"3.3","sz":"3.17","se":"444.59","ch":"522.44","sy":"59.63","tw":"426.98","tj":"5.58","tz":"22.43","th":"312.61","tl":"0.62","tg":"3.07","to":"0.3","tt":"21.2","tn":"43.86","tr":"729.05","tm":0,"ug":"17.12","ua":"136.56","ae":"239.65","gb":"2258.57","us":"14624.18","uy":"40.71","uz":"37.72","vu":"0.72","ve":"285.21","vn":"101.99","ye":"30.02","zm":"15.69","zw":"5.57"};
	var max = 0,
	min = Number.MAX_VALUE,
	cc,
	startColor = [200, 238, 255],
	endColor = [0, 100, 145],
	colors = {},
	hex;

	//find maximum and minimum values
	for (cc in gdpData)
	{
		if (parseFloat(gdpData[cc]) > max)
		{
			max = parseFloat(gdpData[cc]);
		}
		if (parseFloat(gdpData[cc]) < min)
		{
			min = parseFloat(gdpData[cc]);
		}
	}

	//set colors according to values of GDP
	for (cc in gdpData)
	{
		if (gdpData[cc] > 0)
		{
			colors[cc] = '#';
			for (var i = 0; i<3; i++)
			{
				hex = Math.round(startColor[i]
					+ (endColor[i]
					- startColor[i])
					* (gdpData[cc] / (max - min))).toString(16);

				if (hex.length == 1)
				{
					hex = '0'+hex;
				}

				colors[cc] += (hex.length == 1 ? '0' : '') + hex;
			}
		}
	}
	console.log(colors);
	//initialize JQVMap
	jQuery('#vmap').vectorMap(
	{
		backgroundColor: '#333333',
		color: '#ffffff',
		hoverOpacity: 0.2,
		selectedColor: '#666666',
		values: gdpData,
		enableZoom: true,
		showTooltip: true,
		scaleColors: ['#C8EEFF', '#006491'],
		normalizeFunction: 'polynomial'
	});
}