define(['mapTest', 'ratingsys', 'infoTravel', 'places_images_generator', 'eventManager', 'vendor/highslide', 'database'], function (mapTest,ratingsys,infoTravel,places_images_generator) {
	var num = 3;
	setDynamicMap(num); 
	setRatingSystem();
	generateImagesThumbnails(num); 
	getInformationTravel(num);
	return "OK";
});