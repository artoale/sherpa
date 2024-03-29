define(['jquery','thumbGenerator'], function ($,thumbGenerator) {
	"use strict";

	var removeAddFunction = function (mycontent) {
			var closeButton, allChildren, randomChild, appendDivCar, removeDiv, appendDivDel, targetListenerCar,targetListenerBar,rowchildren,removeDivDel;
			targetListenerCar = $("#suggestion");
			//listener sugli elementi del carosello
			targetListenerCar.on('click', function (event) {
				// body...
				event.preventDefault();
				//viene eliminato l'elemento selezionato e aggiunto ai deleted
				if($(event.target).hasClass('btn-danger')) {
					
						//se ci sono ancora elementi in all
						removeDiv = $(event.target).parents(".thumbnail");
						var pippo = $(removeDiv).children(".caption")
						var prova = $(removeDiv).children(".caption").attr("id");
						var appendDivDel = $(thumbGenerator( $(removeDiv).children("img").attr('src') , $(removeDiv).children(".caption").attr("id"),2,"add","btn-success"));
						var deletedDiv = $("#deleted"); 
						if (deletedDiv.size()){
							$(deletedDiv).children('ul').append(appendDivDel);
						} else {
							mycontent.deleted.children('ul').append(appendDivDel);
						}
						
						$(removeDiv).parent("li").remove();
						
				}
			});


			//listener sugli elementi della barra
			targetListenerBar = $('.slider');
			targetListenerBar.on('click',function(event){
				event.preventDefault();

				if ($(event.target).hasClass("btn-success")){
					removeDivDel = $(event.target).parents(".thumbnail");
					var appendDivDel = $(thumbGenerator( $(removeDivDel).children("img").attr('src') , $(removeDivDel).children(".caption").attr("id"),2,"remove","btn-danger"));
					$(".listPoiCar").append(appendDivDel);
					$(removeDivDel).remove();

				}

			});



		};

	return removeAddFunction;
});