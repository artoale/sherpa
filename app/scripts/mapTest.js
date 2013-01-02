/*global google*/
/*jslint browser:true */

function setDynamicMap(choice) {
	/*
	richiede la presenza di un div id="mapcanvas"
	usa oggetti startLocation / endLocation per creare un percorso
	places indica i waypoints che il percorso deve compiere
	*/
	'use strict';
	var places = [];
	var startLocation;
	var endLocation;
	switch(choice) {
	case 0:
		places[0] = 'Rho, Italy';
		places[1] = 'Busto Arsizio, Italy';
		startLocation = 'Milano, Italy';
		endLocation = 'Torino, Italy';
		break;
	case 1:
		places[0] = 'Xian, China';
		places[1] = 'Chengdu, China';
		places[2] = 'Nanjing, China';
		startLocation = 'Beijing, China';
		endLocation = 'Shanghai, China';
		break;
	default:
		places[0] = 'Marseille, France';
		places[1] = 'Bordeaux, France';
		places[2] = 'Paris, France';
		startLocation = 'Nice, France';
		endLocation = 'Nice, France';
		break;
	}
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map;
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	//TODO: METTERE LO STILE DELLA MAPPA NEL CSS (RICORDARSI CHE NECESSITA MINHEIGHT E MIN WIDTH)
	document.getElementById('mapcanvas').style.height = '200px';
	document.getElementById('mapcanvas').style.width = '200px';
	map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);
	directionsDisplay.setMap(map);
	var start = startLocation;
	var end = endLocation;
	var waypts = [];
	places.forEach(function (place) {
		waypts.push({
			location: place
		});

	});
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.DRIVING,
		waypoints: waypts,
		optimizeWaypoints: false
	};
	directionsService.route(request, function (result, status) {
		if(status === google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		} else {
			console.log('Qualcosa è andato storto\n' + result + '\n' + 'status: ' + status);
		}
	});
}