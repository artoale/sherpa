function fillUserInfo(num) {
	'use strict';
	var container = document.getElementById('header_traveller');
	var elem = getData();
	var userImg = document.createElement('img');
	userImg.setAttribute('src', 'images/' + elem.getUserImage(num));
	userImg.setAttribute('alt', ' ');
	userImg.setAttribute('class', 'profile_photo_big');
	document.getElementById('trip_author').appendChild(userImg);
	container.innerHTML = elem.getUserPageTitle(num);
	document.getElementById('trip_author').innerHTML += elem.getUser(num);
	document.getElementById('trip_description').innerHTML = elem.getDescription(num);
	if (num==2)
		document.getElementById('button_friend').style.visibility='hidden';
}