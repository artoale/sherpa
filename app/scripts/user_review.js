define(['fill_user_info', 'mapTest', 'set_travel_list', 'database'], function (UserInfo, mapTest, travelList) {
	var num = 2;
	fillUserInfo(num);
	setStaticMap(num);
	setTravelList(num);
	return "OK";
});