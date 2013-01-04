
define(['mapTest', 'ratingsys', 'infoTravel', 'places_images_generator', 'comment_writer', 'slider', 'jquery','generate_bar_thumb', 'eventManager', 'vendor/highslide', 'database'], 
	function (mapTest, ratingsys, infoTravel, places_images_generator, writeComment, slider, $,generateBarThumb) {
	var num=3;
	var numTrav=1;

	var match = window.location.href.match(/\?user=(\d)/);
	var match2 = window.location.href.match(/trav=(\d)/);
	if (match)
		num=match[1];
	if (match2)
		numTrav=match2[1];
	setDynamicMap(num,numTrav);
	setRatingSystem();
	generateImagesThumbnails(num,numTrav);
	getInformationTravel(num,numTrav);
	generateBarThumbnails(num, numTrav);
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
		headerSize: '50px',
		contentSize: '135px',
		content: mycontent,
		headerContent: ['hotels', 'restaurants', 'shopping'],
		backgroundColor: 'trasparent',
		opacity: 0.7,
		speed: 'fast'
	};
	slider(slideroptions);
	return "OK";
});