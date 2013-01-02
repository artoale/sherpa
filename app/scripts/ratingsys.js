/*jslint browser:true */
/* global addEvent,removeEvent*/

function setRatingSystem() {
	'use strict';
	var sMax = 4; // maximum number of stars
	var el;
	var i;
	var rating = function (e) {
		var num;
		if (e.target) {
			num = e.target;
		} else {
			num = e;
		}
		var s, i;
		s = num.id.replace('el_', ''); // Get the selected star
		for (i = 1; i <= sMax; i++) {
			if (i <= s) {
				document.getElementById('el_' + i).className = 'on';
			} else {
				document.getElementById('el_' + i).className = '';
			}
		}
	};

	var off = function () {
		var i;
		for (i = 1; i <= sMax; i++) {
			document.getElementById('el_' + i).className = '';
		}
	};

	var rateIt = function (e) {
		var me = e.target;
		rating(me);
		document.getElementById('rating_saved').style.visibility = 'visible';
		var i;
		var el;
		for (i = 1; i <= sMax; i++) {
			el = document.getElementById('el_' + i);
			removeEvent(el, 'click', rateIt);
			removeEvent(el, 'mouseover', rating);
			removeEvent(el, 'mouseout', off);
		}
	};

	for (i = 1; i <= sMax; i++) {
		el = document.getElementById('el_' + i);
		addEvent(el, 'click', rateIt);
		addEvent(el, 'mouseover', rating);
		addEvent(el, 'mouseout', off);
	}
}

