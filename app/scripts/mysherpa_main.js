require.config({
    shim: {
        'jquery-ui': {
            deps: ['jquery'],
        },
        fullcalendar: {
            deps: [ 'jquery-ui']
        }
    },

    paths: {
        hm: 'vendor/hm',
        esprima: 'vendor/esprima',
        jquery: 'vendor/jquery/jquery.min',
        fullcalendar: 'vendor/fullcalendar/fullcalendar'
    }
});

require(['mysherpa'], function (app) {
    // use app here
    console.log(app);
});