define(['fill_user_info', 'mapTest', 'set_travel_list','jquery','jquery.jcarousel.min', 'database'], function (UserInfo, mapTest, travelList, $, jCarousel) {
	var num = 3;
	var match = window.location.href.match(/\?user=(\d)/);
	if (match)
		num=match[1];
	fillUserInfo(num);
	setStaticMap(num);
	setTravelList(num);
	require([jCarousel], function (s){
	$('#mycarousel').jcarousel({
                    vertical: true,
                    scroll: 1,
                    animation: "slow",
                    wrap: "circular",
                    auto: 2,
                    visible: 3,
                    rtl: false
                });
	});
	return "OK";
});