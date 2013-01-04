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
			}],
			hotels: [{
				capt: 'Hilton Hotel, Paris',
				uri: 'hilton_paris.jpg'
			}, {
				capt: 'Windsor Hotel, Marseille',
				uri: 'windsor_marseille.jpg'
			}],
			restaurants: [{
				capt: 'Chez Michelle, Paris',
				uri: 'chez_michelle_paris.jpg'
			}],
			shopping: [{
				capt: 'Galeries Lafayette, Paris',
				uri: 'lafayette_paris.jpg'
			}]
		}]
	}, {
		user: 'Eve',
		userImage: 'EvePhoto.jpg',
		travels: []
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
		userDescription: 'Hi, I\'m a 26 year old girl who loves to travel. I like good food and old cities. My secret dream is to go in Czech Republic, still never went there!',
		userPageTitle: 'Alice\'s Wonderful World',
		homeTown: 'New York, USA',
		travels: [{
			title: 'Alice in WonderLand',
			location: 'Italy',
			fromDate: new Date(2012, 7, 5),
			toDate: new Date(2012, 7, 8),
			places: ['Rho, Italy', 'Busto Arsizio, Italy'],
			startLocation: 'Milano, Italy',
			endLocation: 'Torino, Italy',
			description: 'I went there on a business trip, but luckily I had the opportunity to visit some places.\nItaly is wonderful! I especially suggest to visit Turin and don\'t lose the opportunity to eat at the restaurant "Dal Giangi", in Rho, a special place (if you can afford it!)',
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
			}],
			hotels: [{
				capt: 'Hilton Hotel, Milan',
				uri: 'hilton_milan.jpg'
			}, {
				capt: 'Windsor Hotel, Turin',
				uri: 'windsor_turin.jpg'
			}],
			restaurants: [{
				capt: 'Dal Giangi, Rho',
				uri: 'dal_giangi_rho.jpg'
			}],
			shopping: [{
				capt: 'Via Montenapoleone, Milan',
				uri: 'montenapoleone_milan.jpg'
			}]

		}, {
			title: 'Eu sou brasileiro',
			location: 'Brazil',
			fromDate: new Date(2010, 11, 5),
			toDate: new Date(2010, 11, 25),
			places: ['Rio De Janeiro, Brazil'],
			startLocation: 'Sao Paulo, Brazil',
			endLocation: 'Salvador, Brazil',
			description: 'This is an amazing place! Nice people, good food, nature but also crowded cities where you never want to go to bed!\nI really enjoyed Salvador De Bahia, suggested to everybody!',
			pictures: [{
				capt: 'Landscape, Sao Paulo, Brazil',
				uri: 'sao-paolo.jpg'
			}, {
				capt: 'Redeemer Statue, Rio De Janeiro, Brazil',
				uri: 'rio-de-janeiro.jpg'
			}, {
				capt: 'Pelourinho District, Salvador, Brazil',
				uri: 'salvador.jpg'
			}],
			hotels: [{
				capt: 'Rio Della Plata, Rio De Janeiro',
				uri: 'rio_de_la_plata_rio.jpg'
			}, {
				capt: 'Imagem Hotel, Salvador',
				uri: 'imagem_salvador.jpg'
			}],
			restaurants: [{
				capt: 'La Pupuseria, Salvador',
				uri: 'pupuseria_salvador.jpg'
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
			trav.getHotels = function () {
				return trav.hotels;
			};
			trav.getRestaurants = function () {
				return trav.restaurants;
			};
			trav.getShopping = function () {
				return trav.shopping;
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
			trav.getDescription = function () {
				return trav.description;
			};
			trav.getTitle = function () {
				return trav.title;
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
		},
		getDescription: function (num) {
			return datas[num].userDescription;
		},
		getUserPageTitle: function (num) {
			return datas[num].userPageTitle;
		},
		getHomeTown: function (num) {
			return datas[num].homeTown;
		}

	};
}