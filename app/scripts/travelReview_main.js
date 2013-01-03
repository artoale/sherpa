/*jslint browser:true */
require.config({
    paths: {
        jquery: 'vendor/jquery/jquery.min',
    }
});
require(['travelreview'], function (app) {
    // use app here
    console.log(app);
});