/*jslint browser:true */

function generateImagesThumbnails(num) {
	'use strict';
	var images;
	var arrOfTravels = ['France_Alex', 'Brazil_Eve', 'China_Bob', 'Italy_Alice'];
	images = {
		0: [{
			capt: 'Landscape, Nice, France',
			uri: 'nice.jpg'
		}, {
			capt: 'Cathedral, Marseille, France',
			uri: 'marseille.jpg'
		}, {
			capt: 'Bordeaux Center, Bordeaux, France',
			uri: 'bordeaux.jpg'
		}, {
			capt: 'Tour Eiffel, Paris, France',
			uri: 'paris.jpg'
		}],
		1: [{
			capt: 'Landscape, Sao Paulo, Brazil',
			uri: 'sao-paolo.jpg'
		}, {
			capt: 'Redeemer Statue, Rio De Janeiro, Brazil',
			uri: 'rio-de-janeiro.jpg'
		}, {
			capt: 'Pelourinho District, Salvador, Brazil',
			uri: 'salvador.jpg'
		}],
		2: [{
			capt: 'View of the Forbidden City Entrance, Beijing, China',
			uri: 'beijing.jpg'
		}, {
			capt: 'Landscape, Shanghai, China',
			uri: 'shanghai.jpg'
		}, {
			capt: 'Terracotta Army, Xian, China',
			uri: 'xian.jpg'
		}, {
			capt: 'Pandas in the Sichuan Reserve, Chengdu, China',
			uri: 'chengdu.jpg'
		}, {
			capt: 'View of the Canals, Nanjing, China',
			uri: 'nanjing.jpg'
		}],
		3: [{
			capt: 'Dome, Milan, Italy',
			uri: 'milan.jpg'
		}, {
			capt: 'Citterio Factory, Rho, Italy',
			uri: 'rho.jpg'
		}, {
			capt: 'St. John\'s Church, Busto Arsizio, Italy',
			uri: 'busto-arsizio.jpg'
		}, {
			capt: 'Landscape, Turin, Italy',
			uri: 'turin.jpg'
		}]
	};

	var thumbs = images[num];
	var travel = arrOfTravels[num];
	var parent = document.getElementById('trip_info_places');
	thumbs.forEach(function (thumb) {
		var anc = document.createElement('a');
		anc.setAttribute('href', 'images/' + travel + '/' + thumb.uri);
		anc.setAttribute('class', 'highslide');
		anc.setAttribute('onclick', 'return hs.expand(this)');
		var img = document.createElement('img');
		img.setAttribute('src', 'images/' + travel + '/' + thumb.uri);
		img.setAttribute('alt', '');
		img.setAttribute('title', 'Click to enlarge');
		img.setAttribute('height', '120');
		img.setAttribute('width', '107');
		anc.appendChild(img);
		parent.appendChild(anc);
		var div = document.createElement('div');
		div.setAttribute('class', 'highslide-caption');
		div.innerHTML = thumb.capt;
		parent.appendChild(div);
	});
}