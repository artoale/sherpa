function setTravelList(num) {
	Date.prototype.getCustomDate = function () {
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var day = this.getDate();
		return monthNames[this.getMonth()] + ' ' + this.getFullYear();
	};
	var container = document.getElementById('travel_list');
	var elem = getData().getAllTravels(num);
	var user = getData().getUser(num);
	elem.forEach(function (trav) {
		var cont = document.createElement('section');
		cont.setAttribute('class', 'travel_container');
		var aside = document.createElement('aside');
		var photo = document.createElement('img');
		photo.setAttribute('src', 'images/' + trav.getLocation() + '_' + user + '/' + trav.getPictures()[0].uri);
		photo.setAttribute('alt', ' ');
		photo.setAttribute('class', 'thumb_travel');
		cont.appendChild(photo);
		cont.innerHTML += '<dl class=\'dl-horizontal \'>' + '<dt> Location: </dt><dd>' + trav.getLocation() + '</dd>' + '<dt> From: </dt><dd>' + trav.getFromDate().getCustomDate() + '</dd>' + '<dt> To: </dt><dd>' + trav.getToDate().getCustomDate() + '</dd>' + '</dl>';
		container.appendChild(cont);
	});
}