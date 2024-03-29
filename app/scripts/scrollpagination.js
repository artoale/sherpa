/*
 **	Anderson Ferminiano
 **	contato@andersonferminiano.com -- feel free to contact me for bugs or new implementations.
 **	jQuery ScrollPagination
 **	28th/March/2011
 **	http://andersonferminiano.com/jqueryscrollpagination/
 **	You may use this script for free, but keep my credits.
 **	Thank you.
 */

(function($) {
var loading = false;

	$.fn.scrollPagination = function(options) {

		var opts = $.extend($.fn.scrollPagination.defaults, options);
		var target = opts.scrollTarget;
		if(target == null) {
			target = obj;
		}
		opts.scrollTarget = target;

		return this.each(function() {
			$.fn.scrollPagination.init($(this), opts);
		});

	};

	$.fn.stopScrollPagination = function() {
		return this.each(function() {
			$(this).attr('scrollPagination', 'disabled');
			$('#other').html('No more posts!');
			$('#other').css("background-color","lightgray");
		});

	};

	 
	$.fn.demoGoToNext = function() {
		return this.each(function() {
			if ($(this).scrollPagination.defaults['demo'] < 3){
				$(this).scrollPagination.defaults['contentPage']="democontent"+$(this).scrollPagination.defaults['demo']+".html"
				$(this).scrollPagination.defaults['demo']++;
			}else{
				//demo infinite
				//$(this).scrollPagination.defaults['demo']=0;
				$(this).stopScrollPagination();

			}
		});
	};

	$.fn.scrollPagination.loadContent = function(obj, opts) {
		var target = opts.scrollTarget;
		var mayLoadContent = $(target).scrollTop() + opts.heightOffset >= $(document).height() - $(target).height();
		if(mayLoadContent && !loading) {
			if(opts.beforeLoad != null) {
				opts.beforeLoad();
			}
			$(obj).children().attr('rel', 'loaded');
			loading = true;
			$.ajax({
				type: 'POST',
				url: opts.contentPage,
				data : {},
				//data: opts.contentData,
				//use async for demo
				success: function(data) {
					$(obj).append(data);
					var objectsRendered = $(obj).children('[rel!=loaded]');
					if(opts.afterLoad != null) {
						opts.afterLoad(objectsRendered);
						
					}	
				},
				//for DEMO
				//to load only after a request in ajax has finished  
				complete: function(){
		                $(obj).demoGoToNext();
		                loading = false;
		               },
				dataType: 'html'
			});
		}

	};

	$.fn.scrollPagination.init = function(obj, opts) {
		var target = opts.scrollTarget;
		$(obj).attr('scrollPagination', 'enabled');
		$(target).scroll(function(event) {
			if($(obj).attr('scrollPagination') == 'enabled') {
				$.fn.scrollPagination.loadContent(obj, opts);
			} else {
				event.stopPropagation();
			}
		});
		//for DEMO
		//to avoid to load twice democontent0.html 
		//why?
		$(obj).scrollPagination.defaults['demo']=1;
		$.fn.scrollPagination.loadContent(obj, opts);

	};

	$.fn.scrollPagination.defaults = {
		'contentPage': null,
		'contentData': {},
		'beforeLoad': null,
		'afterLoad': null,
		'scrollTarget': null,
		'heightOffset': 0,
		'demo': 0
	};
})(jQuery);