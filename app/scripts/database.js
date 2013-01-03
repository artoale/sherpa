function getData() {
	var datas = [{
		user: 'Alex',
		userImage: 'AlexPhoto.jpg',
		travels: [{
			location: 'France',
			fromDate: new Date(2011, 10, 10),
			toDate: new Date(2011, 10, 22),
			places: ['Marseille, France', 'Bordeaux, France', 'Paris, France'],
			startLocation: 'Nice, France',
			endLocation: 'Nice, France',
			pictures: [{
				capt: 'Landscape, Nice, France',
				uri: 'nice.jpg'
			}, {
				capt: 'Cathedral, Marseille, France',
				uri: 'marseille.jpg'
			}, {
				capt: 'Bordeaux Center, Bordeaux, France',
				uri: 'bordeaux.jpg'
			}, {
				capt: 'Tour Eiffel, Paris, France',
				uri: 'paris.jpg'
			}]
		}]
	}, {
		user: 'Eve',
		userImage: 'EvePhoto.jpg',
		travels: [{
			location: 'Brazil',
			fromDate: new Date(2010, 11, 5),
			toDate: new Date(2010, 11, 25),
			places: ['Rio De Janeiro, Brazil'],
			startLocation: 'Sao Paulo, Brazil',
			endLocation: 'Salvador, Brazil',
			pictures: [{
				capt: 'Landscape, Sao Paulo, Brazil',
				uri: 'sao-paolo.jpg'
			}, {
				capt: 'Redeemer Statue, Rio De Janeiro, Brazil',
				uri: 'rio-de-janeiro.jpg'
			}, {
				capt: 'Pelourinho District, Salvador, Brazil',
				uri: 'salvador.jpg'
			}]
		}]
	}, {
		user: 'Bob',
		userImage: 'BobPhoto.jpg',
		travels: [{
			location: 'China',
			fromDate: new Date(2012, 4, 15),
			toDate: new Date(2012, 5, 25),
			places: ['Xian, China', 'Chengdu, China', 'Nanjing, China'],
			startLocation: 'Beijing, China',
			endLocation: 'Shanghai, China',
			pictures: [{
				capt: 'View of the Forbidden City Entrance, Beijing, China',
				uri: 'beijing.jpg'
			}, {
				capt: 'Landscape, Shanghai, China',
				uri: 'shanghai.jpg'
			}, {
				capt: 'Terracotta Army, Xian, China',
				uri: 'xian.jpg'
			}, {
				capt: 'Pandas in the Sichuan Reserve, Chengdu, China',
				uri: 'chengdu.jpg'
			}, {
				capt: 'View of the Canals, Nanjing, China',
				uri: 'nanjing.jpg'
			}]
		}]
	}, {
		user: 'Alice',
		userImage: 'AlicePhoto.jpg',
		travels: [{
			location: 'Italy',
			fromDate: new Date(2012, 7, 5),
			toDate: new Date(2012, 7, 8),
			places: ['Rho, Italy', 'Busto Arsizio, Italy'],
			startLocation: 'Milano, Italy',
			endLocation: 'Torino, Italy',
			pictures: [{
				capt: 'Dome, Milan, Italy',
				uri: 'milan.jpg'
			}, {
				capt: 'Citterio Factory, Rho, Italy',
				uri: 'rho.jpg'
			}, {
				capt: 'St. John\'s Church, Busto Arsizio, Italy',
				uri: 'busto-arsizio.jpg'
			}, {
				capt: 'Landscape, Turin, Italy',
				uri: 'turin.jpg'
			}]
		}]
	}];
	datas.forEach(function (elem) {
		elem.getTravel = function (numTrav) {
			return elem.travels[numTrav];
		};
		elem.getTravelPicture = function (numTrav) {
			return elem.travels[numTrav].location + '_' + elem.user;
		};
		elem.travels.forEach(function (trav) {
			trav.getPictures = function () {
				return trav.pictures;
			};
			trav.getLocation = function () {
				return trav.location;
			};
			trav.getFromDate = function () {
				return trav.fromDate;
			};
			trav.getToDate = function () {
				return trav.toDate;
			};
			trav.getPlaces = function () {
				return trav.places;
			};
			trav.getStartLocation = function () {
				return trav.startLocation;
			};
			trav.getEndLocation = function () {
				return trav.endLocation;
			};
		});
	});
	return {
		getUser: function (num) {
			return datas[num].user;
		},
		getUserImage: function (num) {
			return datas[num].userImage;
		},
		getAllTravels: function (num) {
			return datas[num].travels;
		},
		getSingleTravel: function (num, numTrav) {
			return datas[num].getTravel(numTrav);
		}
	};
}