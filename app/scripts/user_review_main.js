require.config({
	shim: {
        'jquery.jcarousel.min': {
            deps: ['jquery'],
        }
    },
    paths: {
        jquery: 'vendor/jquery/jquery.min',
    }
});
require(['user_review'], function (app) {
	// use app here
	console.log(app);
});