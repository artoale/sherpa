/*jslint browser:true */
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
require(['travelreview'], function (app) {
    // use app here
    console.log(app);
});