define(['jquery'], function($) {
	"use strict";

	var removeAddFunction = function() {
		var closeButton;
		closeButton = $(".removePoi");
		closeButton.addEventListner(function(event) {
			// body...
			var removeDiv;
			removeDiv = event.target.parent();
			$("#deleted").append($(removeDiv));

		});
	};

	return removeAddFunction;
});