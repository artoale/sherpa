function getData() {
	var datas = [{
		user: 'Alex',
		userImage: 'AlexPhoto.jpg',
		userDescription: 'My name is Alex, I\'m 22 and I love Europe! Unfortunately I\'m a bit far away, but I\'m looking for to go there whenever I can!',
		userPageTitle: 'Europe mon amour!',
		homeTown: 'Hanoi, Vietnam',
		travels: [{
			title: 'C\'est la France!',
			location: 'France',
			fromDate: new Date(2011, 10, 10),
			toDate: new Date(2011, 10, 22),
			places: ['Marseille, France', 'Bordeaux, France', 'Paris, France'],
			startLocation: 'Nice, France',
			endLocation: 'Nice, France',
			description: 'C\'est la marveille! I loved France, the cities, the people, the food (especially the wine!). From north to south, everything is a discovery day by day!',
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
				capt: 'Hilton',
				uri: 'hilton_paris.jpg'
			}, {
				capt: 'Windsor',
				uri: 'windsor_marseille.jpg'
			}],
			restaurants: [{
				capt: 'Michelle',
				uri: 'chez_michelle_paris.jpg'
			}],
			shopping: [{
				capt: 'Lafayette',
				uri: 'lafayette_paris.jpg'
			}]
		}]
	}, {
		user: 'Eve',
		userImage: 'EvePhoto.jpg',
		userDescription: 'Bonjour à tout le monde! My name is Eve, I am a young girl from Bordeaux, France, and I love Africa! I travel a lot with my family and, if I can afford it, with a couple of friends!',
		userPageTitle: 'Le fabuleux destin d\'Eve',
		homeTown: 'Bordeaux, France',
		travels: [{
			title: 'It\'s Pyramid time!',
			location: 'Egypt',
			fromDate: new Date(2009, 10, 1),
			toDate: new Date(2009, 10, 14),
			places: ['Alexandria, Egypt', 'Suez, Egypt', 'Luxor, Egypt', 'Aswan, Egypt'],
			startLocation: 'Cairo, Egypt',
			endLocation: 'Cairo, Egypt',
			description: 'Egypt is such a mysterious and fascinating country! Under the shadow of the pyramids you can really feel the atmosphere from four thousand years ago! ',
			pictures: [{
				capt: 'University of Cairo',
				uri: 'university_cairo.jpg'
			}, {
				capt: 'The Pyramids!',
				uri: 'piramidi_sfinge.jpg'
			}, {
				capt: 'Fort of Alexandria',
				uri: 'Alexandria.jpg'
			}, {
				capt: 'Temple Of Karanak in Luxor',
				uri: 'karnak-temple_luxor.jpg'
			}, {
				capt: 'Fascinating!',
				uri: 'Abu_Simbel.jpg'
			}],
			hotels: [{
				capt: 'Marriott',
				uri: 'marriott.jpg'
			}, {
				capt: 'Sonesta',
				uri: 'sonesta.jpg'
			}],
			restaurants: [{
				capt: 'Flamenco',
				uri: 'flamenco.jpg'
			}]
		}]
	}, {
		user: 'Bob',
		userImage: 'BobPhoto.jpg',
		userDescription: 'I\'m an american guy who has what somebody calls "East Disease". I mean, I need to go to Far East whenever I can, I love its atmosphere and the different cultures! Contact me if you want to go there!',
		userPageTitle: 'Asia is my World',
		homeTown: 'Los Angelese, USA',

		travels: [{
			location: 'China',
			fromDate: new Date(2012, 4, 15),
			toDate: new Date(2012, 5, 25),
			places: ['Xian, China', 'Chengdu, China', 'Nanjing, China'],
			startLocation: 'Beijing, China',
			endLocation: 'Shanghai, China',
			title: 'A bit of China',
			description: 'this have been a random trip. I wanted to go to Korea, but at the very last minute I changed my mind and went to Beijing. From there, I made a very quick tour of the principal cities, in order to know something about everything. I\'m planning to repeate this trip with more days, contact me!',
			pictures: [{
				capt: 'View of the Forbidden City Entrance, Beijing',
				uri: 'beijing.jpg'
			}, {
				capt: 'Landscape of Shanghai',
				uri: 'shanghai.jpg'
			}, {
				capt: 'Terracotta Army',
				uri: 'xian.jpg'
			}, {
				capt: 'Pandas are Cute!',
				uri: 'chengdu.jpg'
			}, {
				capt: 'View of the Canals, Nanjing',
				uri: 'nanjing.jpg'
			}],
			hotels: [{
				capt: 'Brian',
				uri: 'brian.jpg'
			}, {
				capt: 'Sheraton',
				uri: 'sheraton.jpg'
			}],
			restaurants: [{
				capt: 'Mifan',
				uri: 'table.jpg'
			},{
				capt: 'Baiju',
				uri: 'baiju.jpg'
			}],
			shopping: [{
				capt: 'Shinlu',
				uri: 'shinlu.jpg'
			}, {
				capt: 'Old City',
				uri: 'old.jpg'
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
				capt: 'Hilton',
				uri: 'hilton_milan.jpg'
			}, {
				capt: 'Windsor',
				uri: 'windsor_turin.jpg'
			}],
			restaurants: [{
				capt: 'Dal Giangi',
				uri: 'dal_giangi_rho.jpg'
			}],
			shopping: [{
				capt: 'Monte',
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
				capt: 'La Plata',
				uri: 'rio_de_la_plata_rio.jpg'
			}, {
				capt: 'Imagem',
				uri: 'imagem_salvador.jpg'
			}],
			restaurants: [{
				capt: 'Pupuseria',
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