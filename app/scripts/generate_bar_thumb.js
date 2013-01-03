function helperCycle(thumbs, typeOfDiv, travel, parent) {
	var par = document.createElement('div');
	par.setAttribute('id', typeOfDiv);	
	thumbs.forEach(function (thumb) {
		var subpar = document.createElement('div');
		subpar.setAttribute('class', 'elBottom');
		var sp = document.createElement('span');
		var img = document.createElement('img');
		img.setAttribute('src', 'images/' + travel + '/' + thumb.uri);
		img.setAttribute('alt', ' ');
		img.setAttribute('class', 'imgPoiBar');
		sp.appendChild(img);
		var head = document.createElement('header');
		var p = document.createElement('p');
		p.setAttribute('class', 'poiTitle');
		p.innerHTML = thumb.capt;
		head.appendChild(p);
		subpar.appendChild(sp);
		subpar.appendChild(head);
		par.appendChild(subpar);
	});
	parent.appendChild(par);
}
function generateBarThumbnails(num) {
	'use strict';
	var gen = getData();
	var elem = gen.getSingleTravel(num, 0);
	var travel = elem.getLocation(0) + '_' + gen.getUser(num);
	var parent = document.getElementById('barContainer');
	var thumbs = elem.getHotels();
	helperCycle(thumbs, 'hotels', travel, parent);
	thumbs = elem.getRestaurants();
	helperCycle(thumbs, 'restaurants', travel, parent);
	thumbs = elem.getShopping();
	helperCycle(thumbs, 'shopping', travel, parent);
}
/*
<div id="hotels">
  <div class="elBottom">
    <span>
    <img src="images/restaurant.jpg" alt="" class="imgPoiBar">
    </span>
    <header>
      <p class="poiTitle"></p>
    </header>
  </div>
  <div class="elBottom">
    <span>
    <img src="" alt="" class="imgPoiBar">
    </span>
    <header>
      <p class="poiTitle"></p>
    </header>
  </div>
  <div class="elBottom">
    <span>
    <img src="" alt="" class="imgPoiBar">
    </span>
    <header>
      <p class="poiTitle"></p>
    </header>
  </div>
  <div class="elBottom">
    <span>
    <img src="" alt="" class="imgPoiBar">
    </span>
    <header>
      <p class="poiTitle"></p>
    </header>
  </div>
  <div class="elBottom">
    <span>
    <img src="" alt="" class="imgPoiBar">
    </span>
    <header>
      <p class="poiTitle"></p>
    </header>
  </div>
</div>

<div id="restaurants">
  <span class="elBottom">
    <img src="images/sicily.jpg" alt="" class="imgPoiBar">
    <header>
      <p class="poiTitle">Sicilia</p>
    </header>
  </span>
  <span class="elBottom">
    <img src="images/sicily.jpg" alt="" class="imgPoiBar">
    <header>
      <p class="poiTitle">Sicilia</p>
    </header>
  </span>
  <span class="elBottom">
    <img src="images/sicily.jpg" alt="" class="imgPoiBar">
    <header>
      <p class="poiTitle">Sicilia</p>
    </header>
  </span>
  <span class="elBottom">
    <img src="images/sicily.jpg" alt="" class="imgPoiBar">
    <header>
      <p class="poiTitle">Sicilia</p>
    </header>
  </span>
  <span class="elBottom">
    <img src="images/sicily.jpg" alt="" class="imgPoiBar">
    <header>
      <p class="poiTitle">Sicilia</p>
    </header>
  </span>
</div>

<div id="shopping">

</div>
*/