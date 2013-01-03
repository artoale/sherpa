/*global google*/
/*jslint browser:true */

function setDynamicMap(num) {
	/*
	richiede la presenza di un div id="mapcanvas"
	usa oggetti startLocation / endLocation per creare un percorso
	places indica i waypoints che il percorso deve compiere
	*/
	'use strict';
	var elem = getData().getSingleTravel(num, 0);
	var places = elem.getPlaces();
	var startLocation = elem.getStartLocation();
	var endLocation = elem.getEndLocation();

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map;
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	document.getElementById('mapcanvas').style.height = '350px';
	document.getElementById('mapcanvas').style.width = '90%';
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

function setStaticMap(num) {
	'use strict';
	var container = document.getElementById('mapcanvas');
	var elem = getData().getAllTravels(num);
	var im = document.createElement('img');
	var st = 'http://maps.googleapis.com/maps/api/staticmap?markers=color:blue|size:small';
	elem.forEach(function (el) {
		st = st + '|' + el.getLocation();
	});
	st = st + '&zoom=0&size=400x400&sensor=false';
	im.setAttribute('src', st);
	im.setAttribute('alt', ' ');
	container.appendChild(im);
}