require.config({
    shim: {
        'jquery-ui': {
            deps: ['jquery'],
        },
        fullcalendar: {
            deps: [ 'jquery-ui']
        },
        popover: {
            deps: ['jquery','tooltip']
        },
        tooltip: {
            deps: ['jquery']
        }
    },

    paths: {
        hm: 'vendor/hm',
        esprima: 'vendor/esprima',
        jquery: 'vendor/jquery/jquery.min',
        fullcalendar: 'vendor/fullcalendar/fullcalendar',
        popover: 'vendor/bootstrap/bootstrap-popover',
        tooltip: 'vendor/bootstrap/bootstrap-tooltip'
    }
});

require(['mysherpa'], function (app) {
    // use app here
    console.log(app);
});