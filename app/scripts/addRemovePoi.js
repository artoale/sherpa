define(['jquery'], function ($) {
	"use strict";

	var fromCarouselToBar = function (removeDiv) {
			var newDiv = document.createElement('div'),
				img, span, headerDiv = document.createElement('header');
			img = removeDiv.children("img.imgPoi");
			$(img).removeClass();
			$(img).addClass("imgPoiBar");
			span = removeDiv.children("span");
			$(newDiv).addClass("elBottom");
			$(headerDiv).append(span);
			$(newDiv).append(img);
			$(newDiv).append(headerDiv);
			return newDiv;
		};

	var frombarlToCarouselWithAppend = function (parent, removeDiv) {
			var src = $(removeDiv).find(".imgPoiBar").attr("src");
			var prova = $(removeDiv).find(".poiTitle");
			var poiTitle = prova.html();
			$(parent).append('<img class="imgPoi" src="' + src + '" height="100px" width="100px"> <span class="poiTitle">' + poiTitle + '</span><img src="images/removePoi.jpeg" class="removePoi">');
		};


	var removeAddFunction = function (mycontent) {
			var closeButton, allChildren, randomChild, appendDivCar, removeDiv, appendDivDel, targetListenerCar,targetListenerBar,rowchildren;
			targetListenerCar = $("#suggestion");
			//listener sugli elementi del carosello
			targetListenerCar.on('click', function (event) {
				// body...
				allChildren = $(mycontent['all']).children();

				//viene eliminato l'elemento selezionato e aggiunto ai deleted
				if($(event.target).hasClass('removePoi')) {
					if(allChildren.length > 0) {
						//se ci sono ancora elementi in all
						removeDiv = $(event.target).parent();
						appendDivDel = fromCarouselToBar(removeDiv);
						removeDiv.empty();
						$("#deleted").append($(appendDivDel));

						//scelgo uno casuale da all da aggiungere al posto di quello eliminato
						randomChild = allChildren[Math.floor(Math.random() * allChildren.length)];
						frombarlToCarouselWithAppend(removeDiv, randomChild);
						$(randomChild).remove();
					} else {
						alert("Sherpa has no more knowledge");
					}
				}
			});


			//listener sugli elementi della barra
			targetListenerBar = $('#contentBar');
			targetListenerBar.on('click',function(){

				if ($(this).hasClass("imgPoiBar")){
				rowchildren = $(".container-fluid div:last-child").children();
					if(rowchildren.length <3){
						alert ("ci sta");
					}
					else{
						alert("non ci sta");
					}



				}

			});



		};

	return removeAddFunction;
});