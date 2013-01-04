require.config({
	shim: {
        'jquery.jcarousel.min': {
            deps: ['jquery'],
        },
        'scrollpagination': {
            deps: ['jquery'],
        }
    },
    paths: {
        jquery: 'vendor/jquery/jquery.min',
    }
});
require(['stream'], function (app) {
	// use app here
	console.log(app);
});