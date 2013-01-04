/*jslint browser:true */

function getInformationTravel(num, numTrav) {
	'use strict';

	Date.prototype.getCustomDate = function () {
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var day = this.getDate();
		return day + ' ' + monthNames[this.getMonth()] + ' ' + this.getFullYear();
	};
	var container = document.getElementById('header_traveller');
	var elem = getData();
	var userImg = document.createElement('img');
	var travel = elem.getSingleTravel(num, numTrav);
	userImg.setAttribute('src', 'images/' + elem.getUserImage(num));
	userImg.setAttribute('alt', ' ');
	userImg.setAttribute('class', 'profile_photo_big');
	document.getElementById('trip_author').appendChild(userImg);
	//container.innerHTML += '<span class=\'title\'>' + '<span class=\'titleFirstLetter\'>' + travel.getTitle().charAt(0) + '</span>' + travel.getTitle().substring(1) + '</span>';
	container.innerHTML = travel.getTitle();
	document.getElementById('trip_info_destination').innerHTML += travel.getLocation();
	document.getElementById('trip_info_fromdate').innerHTML += travel.getFromDate().getCustomDate();
	document.getElementById('trip_info_todate').innerHTML += travel.getToDate().getCustomDate();
	document.getElementById('trip_description').innerHTML = travel.getDescription();
	document.getElementById('trip_author').innerHTML += elem.getUser(num);

}