(function () {
    'use strict';
    require.config({
        shim: {
            'jquery-ui': {
                deps: ['jquery'],
            },
            fullcalendar: {
                deps: ['jquery-ui']
            },
            popover: {
                deps: ['jquery', 'tooltip']
            },
            tooltip: {
                deps: ['jquery'],
                init : function ($) {
                    this.console.log('cacca');
                    $('<div></div>').tooltip();
                }
            },
            addRemovePoi: {
                deps: ['slider']
            }
        },

        paths: {
            hm: 'vendor/hm',
            esprima: 'vendor/esprima',
            jquery: 'vendor/jquery/jquery.min',
            fullcalendar: 'vendor/fullcalendar/fullcalendar',
            tooltip: 'vendor/bootstrap/bootstrap-tooltip',
            popover: 'vendor/bootstrap/bootstrap-popover',
            addRemovePoi: 'addRemovePoi'
        }
    });

    require(['mysherpa'], function (app) {
        // use app here
        console.log(app);
    });

}());