/*jslint browser:true */

function generateImagesThumbnails(num) {
	'use strict';
	var images;
	var arrOfTravels = ['France_Alex', 'Brazil_Eve', 'China_Bob', 'Italy_Alice'];
	images = {
		0: [{
			capt: 'Nice, France',
			uri: 'nice.jpg'
		}, {
			capt: 'Marseille, France',
			uri: 'marseille.jpg'
		}, {
			capt: 'Bordeaux, France',
			uri: 'bordeaux.jpg'
		}, {
			capt: 'Paris, France',
			uri: 'paris.jpg'
		}],
		1: [{
			capt: 'Sao Paulo, Brazil',
			uri: 'saopaolo.jpg'
		}, {
			capt: 'Rio De Janeiro, Brazil',
			uri: 'rio.jpg'
		}, {
			capt: 'Salvador, Brazil',
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
			capt: 'Milan, Italy',
			uri: 'milan.jpg'
		}, {
			capt: 'Rho, Italy',
			uri: 'rho.jpg'
		}, {
			capt: 'Busto Arsizio, Italy',
			uri: 'bustoarsizio.jpg'
		}, {
			capt: 'Turin, Italy',
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