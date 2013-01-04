define(['mapTest', 'ratingsys', 'infoTravel', 'places_images_generator', 'comment_writer', 'slider', 'jquery', 'generate_bar_thumb', 'jquery.jcarousel.min', 'thumbGenerator','eventManager', 'vendor/highslide', 'database'], function (mapTest, ratingsys, infoTravel, places_images_generator, writeComment, slider, $, generateBarThumb, jCarousel,thumbGenerator) {
	var num = 2;
	var numTrav = 0;

	var match = window.location.href.match(/\?user=(\d)/);
	var match2 = window.location.href.match(/trav=(\d)/);
	if(match) num = match[1];
	if(match2) numTrav = match2[1];
	setDynamicMap(num, numTrav);
	setRatingSystem();
	generateImagesThumbnails(num, numTrav);
	getInformationTravel(num, numTrav);
	//generateBarThumbnails(num, numTrav);
	var mycontent = {};
	Object.defineProperties(mycontent, {
		'hotels': {
			value: $('#hotels'),
			enumerable: true
		},
		'restaurants': {
			value: $('#restaurants'),
			enumerable: true
		},
		'shopping': {
			value: $('#shopping'),
			enumerable: true
		}
	});
	var slideroptions = {
		column: ['Hotel', 'Restaurant', 'Shopping'],
		position: 'bottom',
		headerSize: '40px',
		contentSize: '200px',
		content: mycontent,
		headerContent: ['hotels', 'restaurants', 'shopping'],
		backgroundColor: 'trasparent',
		opacity: 0.7,
		speed: 'fast'
	};
	var generateContentBar = function (selector,thumbs) {
		var container = $('#' + selector),
			ulRowfluid = document.createElement('ul');
		$(ulRowfluid).addClass("listPoiBar");
		$(ulRowfluid).addClass("unstyled");

		thumbs.forEach(function (thumb, index) {
			$(ulRowfluid).append(thumbGenerator(thumb.uri, thumb.capt, 2));
		});
		$(container).append(ulRowfluid);
	};

	var gen = getData();
	var elem = gen.getSingleTravel(num, numTrav);
	var travel = elem.getLocation() + '_' + gen.getUser(num);
	var hotels = elem.getHotels();
	if (hotels) {
		hotels.forEach(function (el) {
			el.uri = 'images/'+travel + '/' + el.uri;
		});
		generateContentBar("hotels",hotels);
	}
	restaurants = elem.getRestaurants();
	if (restaurants) {
		restaurants.forEach(function (el) {
			el.uri = 'images/'+travel + '/' + el.uri;
		});
		generateContentBar("restaurants",restaurants);
	}
	shopping = elem.getShopping();
	if (shopping) {
		shopping.forEach(function (el) {
			el.uri = 'images/'+travel + '/' + el.uri;
		});
		generateContentBar("shopping",shopping);
	}

	slider(slideroptions);

	require([jCarousel], function (s) {
		$('#mycarousel').jcarousel({
			vertical: true,
			scroll: 1,
			animation: "slow",
			wrap: "circular",
			auto: 2,
			visible: 3,
			rtl: false
		});
	});

	return "OK";
});