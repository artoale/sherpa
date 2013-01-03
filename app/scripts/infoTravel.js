/*jslint browser:true */

function getInformationTravel(num) {
	'use strict';

	Date.prototype.getCustomDate = function () {
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var day = this.getDate();
		return day + ' ' + monthNames[this.getMonth()] + ' ' + this.getFullYear();
	};
	var container = document.getElementById('header_traveller');
	var elem = getData();
	container.innerHTML = '<br><span class=\'user_name\'>' + '<span class=\'user_nameFirstLetter\'>' + elem.getUser(num).charAt(0) + '</span>' + elem.getUser(num).substring(1) + '</span>';
	var userImg = document.createElement('img');
	userImg.setAttribute('src', 'images/' + elem.getUserImage(num));
	userImg.setAttribute('alt', ' ');
	userImg.setAttribute('class', 'profile_photo_big');
	container.appendChild(userImg);
	var travel = elem.getSingleTravel(num, 0);
	document.getElementById('trip_info_destination').innerHTML = travel.getLocation();
	document.getElementById('trip_info_dates').innerHTML = 'from ' + travel.getFromDate().getCustomDate() + ' to ' + travel.getToDate().getCustomDate();
}