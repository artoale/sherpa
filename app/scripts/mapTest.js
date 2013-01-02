window.onload = function () {
	/*
	richiede la presenza di un div id="mapcanvas"
	usa oggetti startLocation / endLocation per creare un percorso
	places indica i waypoints che il percorso deve compiere
	*/
	'use strict';
	var places = [];
	places[0] = 'Rho, Italy';
	places[1] = 'Busto Arsizio, Italy';
	var startLocation = 'Milano, Italy';
	var endLocation = 'Torino, Italy';
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map;
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	//TODO: METTERE LO STILE DELLA MAPPA NEL CSS (RICORDARSI CHE NECESSITA MINHEIGHT E MIN WIDTH)
	document.getElementById('mapcanvas').style.height = '100%';
	document.getElementById('mapcanvas').style.width = '100%';
	document.getElementById('mapcanvas').style.minWidth = '500px';
	document.getElementById('mapcanvas').style.minHeight = '500px';
	map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);
	directionsDisplay.setMap(map);
	var start = startLocation;
	var end = endLocation;
	var waypts = [];
	places.forEach(function(place) {
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
	directionsService.route(request, function(result, status) {
		if(status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		} else {
			console.log('Qualcosa è andato storto\n' + result + '\n' + 'status: ' + status);
		}
	});
};