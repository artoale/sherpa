function fillUserInfo(num) {
	'use strict';

	var container = document.getElementById('header_traveller');
	var elem = getData();
	container.innerHTML = '<br><span id=\'user_name\'>' + '<span id=\'user_nameFirstLetter\'>' + elem.getUser(num).charAt(0) + '</span>' + elem.getUser(num).substring(1) + '</span>';
	var userImg = document.createElement('img');
	userImg.setAttribute('src', 'images/' + elem.getUserImage(num));
	userImg.setAttribute('alt', ' ');
	userImg.setAttribute('class', 'profile_photo_big');
	container.appendChild(userImg);
}