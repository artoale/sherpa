define(['jquery'], function($) {
	"use strict";

	var fromCarouselToBar = function(removeDiv) {
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
	var frombarlToCarouselWithAppend = function(parent, removeDiv) {
			var src = $(removeDiv).find(".imgPoiBar").attr("src");
			var prova = $(removeDiv).find(".poiTitle");
			var poiTitle = prova.html();
			$(parent).append('<img class="imgPoi" src="' + src + '" height="100px" width="100px"> <span class="poiTitle">' + poiTitle + '</span><img src="images/removePoi.jpeg" class="removePoi">');
		};


	var removeAddFunction = function() {
			var closeButton, allChildren, randomChild, appendDivCar, removeDiv, appendDivDel,targetListener;
			targetListener = $("#suggestion");
			targetListener.on('click', function(event) {
				// body...
				//viene eliminato l'elemento selezionato e aggiunto ai deleted
				if ($(event.target).hasClass('removePoi') ){ 
				removeDiv = $(event.target).parent();
				appendDivDel = fromCarouselToBar(removeDiv);
				removeDiv.empty();
				$("#deleted").append($(appendDivDel));

				//scelgo uno casuale da all da aggiungere al posto di quello eliminato
				allChildren = $("#all").children();
				randomChild = allChildren[Math.floor(Math.random() * allChildren.length)];
				frombarlToCarouselWithAppend(removeDiv, randomChild);
				$(randomChild).remove();
			}


			});
		};

	return removeAddFunction;
});