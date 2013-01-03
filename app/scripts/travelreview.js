
define(['mapTest', 'ratingsys', 'infoTravel', 'places_images_generator', 'comment_writer', 'slider', 'jquery','generate_bar_thumb', 'eventManager', 'vendor/highslide', 'database'], 
	function (mapTest, ratingsys, infoTravel, places_images_generator, writeComment, slider, $,generateBarThumb) {
	var num = 3;
	setDynamicMap(num);
	setRatingSystem();
	generateImagesThumbnails(num);
	getInformationTravel(num);
	generateBarThumbnails(num);
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