/*jslint browser:true */

function getInformationTravel(num) {
	'use strict';

	Date.prototype.getCustomDate = function () {
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var day = this.getDate();
		return day + ' ' + monthNames[this.getMonth()] + ' ' + this.getFullYear();
	};

	var arrOfTravels = {
		0: {
			user: 'Alex',
			userImage: 'AlexPhoto.jpg',
			location: 'France',
			fromDate: new Date(2011, 10, 10),
			toDate: new Date(2011, 10, 22),
		},
		1: {
			user: 'Eve',
			userImage: 'EvePhoto.jpg',
			location: 'Brazil',
			fromDate: new Date(2010, 11, 5),
			toDate: new Date(2010, 11, 25),
		},
		2: {
			user: 'Bob',
			userImage: 'BobPhoto.jpg',
			location: 'China',
			fromDate: new Date(2012, 4, 15),
			toDate: new Date(2012, 5, 25),
		},
		3: {
			user: 'Alice',
			userImage: 'AlicePhoto.jpg',
			location: 'Italy',
			fromDate: new Date(2012, 7, 5),
			toDate: new Date(2012, 7, 8),
		}
	};
	var travel = arrOfTravels[num];
	var container = document.getElementById('header_traveller');
	container.innerHTML = travel.user;
	var userImg = document.createElement('img');
	userImg.setAttribute('src', 'images/' + travel.userImage);
	userImg.setAttribute('alt', '');
	userImg.setAttribute('class', 'profile_photo_big');
	container.appendChild(userImg);
	document.getElementById('trip_info_destination').innerHTML = travel.location;
	document.getElementById('trip_info_dates').innerHTML = 'from ' + travel.fromDate.getCustomDate() + ' to ' + travel.toDate.getCustomDate();
}