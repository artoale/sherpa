define(['jquery','thumbGenerator'], function ($,thumbGenerator) {
	"use strict";

	// var fromCarouselToBar = function (removeDiv) {
	// 		var newDiv = document.createElement('div'),
	// 			img, span, headerDiv = document.createElement('header');
	// 		img = removeDiv.children("img.imgPoi");
	// 		$(img).removeClass();
	// 		$(img).addClass("imgPoiBar");
	// 		span = removeDiv.children("span");
	// 		$(newDiv).addClass("elBottom");
	// 		$(headerDiv).append(span);
	// 		$(newDiv).append(img);
	// 		$(newDiv).append(headerDiv);
	// 		return newDiv;
	// 	};

	// var frombarlToCarouselWithAppend = function (parent, removeDiv) {
	// 		var src = $(removeDiv).find(".imgPoiBar").attr("src");
	// 		var prova = $(removeDiv).find(".poiTitle");
	// 		var poiTitle = prova.html();
	// 		$(parent).append('<img class="imgPoi" src="' + src + '" height="100px" width="100px"> <span class="poiTitle">' + poiTitle + '</span><img src="images/removePoi.jpeg" class="removePoi">');
	// 	};


	var removeAddFunction = function (mycontent) {
			var closeButton, allChildren, randomChild, appendDivCar, removeDiv, appendDivDel, targetListenerCar,targetListenerBar,rowchildren,removeDivDel;
			targetListenerCar = $("#suggestion");
			//listener sugli elementi del carosello
			targetListenerCar.on('click', function (event) {
				// body...

				//viene eliminato l'elemento selezionato e aggiunto ai deleted
				if($(event.target).hasClass('btn-danger')) {
					
						//se ci sono ancora elementi in all
						removeDiv = $(event.target).parents(".thumbnail");
						var appendDivDel = $(thumbGenerator( $(removeDiv).children("img").attr('src').replace('images/thumb/','') , $(removeDiv).children(".caption").html(),2,"add","btn-success"));
						$("#deleted").append(appendDivDel);
						
						$(removeDiv).remove();
						
				}
			});


			//listener sugli elementi della barra
			targetListenerBar = $('.listPoiBar');
			targetListenerBar.on('click',function(event){
				event.preventDefault();

				if ($(event.target).hasClass("btn-success")){
					removeDivDel = $(event.target).parents(".thumbnail");
					var appendDivDel = $(thumbGenerator( $(removeDivDel).children("img").attr('src').replace('images/thumb/','') , $(removeDivDel).children(".caption").html(),2,"add","btn-success"));
					$(".listPoiCar").append(appendDivDel);
					$(removeDivDel).remove();

				}

			});



		};

	return removeAddFunction;
});