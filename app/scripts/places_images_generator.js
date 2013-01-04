/*jslint browser:true */

function generateImagesThumbnails(num,numTrav) {
	'use strict';
	var gen = getData();
	var elem = gen.getSingleTravel(num, numTrav);
	var thumbs = elem.getPictures();
	var travel = elem.getLocation() + '_' + gen.getUser(num);
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