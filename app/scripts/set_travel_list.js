function setTravelList(num) {
	Date.prototype.getCustomDate = function () {
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var day = this.getDate();
		return monthNames[this.getMonth()] + ' ' + this.getFullYear();
	};
	var container = document.getElementById('travel_list');
	var elem = getData().getAllTravels(num);
	var user = getData().getUser(num);
	document.getElementById('topper_travels').innerHTML += '<h4 style=\'margin-bottom:15px;\'>Take a look at ' + user + '\'s Trips!</h4>';
	var i=0;
	elem.forEach(function (trav) {
		var cont = document.createElement('section');
		cont.setAttribute('class', 'travel_review_comment row');
		cont.innerHTML = '<img class=\'span2 thumb_travel\' src=\'images/' + trav.getLocation() + '_' + user + '/' + trav.getPictures()[0].uri + '\' alt=\' \'>' + '<dl class=\' comment_element span3\'>' + '<dt> Location: </dt><dd>' + trav.getLocation() + '</dd>' + '<dt> From: </dt><dd>' + trav.getFromDate().getCustomDate() + '</dd>' + '<dt> To: </dt><dd>' + trav.getToDate().getCustomDate() + '</dd>' + '</dl>' + '<dl class=\' comment_element span4\'>' + '<dt> Description: </dt><dd>' + trav.getDescription() + '</dd>' + '</dl>' 
		+ '<a href=TravelReview.html?user='+num+'&trav='+i+'><button style=\'margin-top: 20px; margin-bottom:20px\'class=\'btn btn-info span1\' type=\'button\'> Take a look! </button></a>';
		container.appendChild(cont);
		i+=1;
	});
}