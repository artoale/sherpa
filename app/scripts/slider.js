/*global define*/
define(['jquery'], function($) {
    'use strict';


    var defaults = {
        column: ['Hotel', 'Restaurant', 'Shopping'],
        position: 'bottom',
        headerSize: '30px',
        contentSize: '200px',
        content: {},
        headerContent: ['pinco', 'pallo', 'pollo'],
        backgroundColor: '#bbb',
        opacity: 0.7,
        speed: 'fast'
    },

        opt;
    var generateHeaderContent = function(optcontent) {
            var content = document.createElement('div');
            var array = Object.keys(optcontent) ;
            Object.keys(optcontent).forEach(function(element) {
                $(optcontent[element]).append($('<span class="span4">' + element + '</span>').css({
                    margin: ''
                }));
            });
            return content;
        };
    var create = function(options) {
            opt = $.extend(true, {}, defaults, options);
            var sliderHeight = parseInt(opt.headerSize, 10) + parseInt(opt.contentSize, 10);
            var slider = document.createElement('div');
            var header = document.createElement('div');
            var content = document.createElement('div');
            var bottomBar = document.createElement('div');
            var visible = true;
            $(header).addClass('row-fluid');
            var doHide = function() {
                    $(slider).animate({
                        height: opt.headerSize
                    }, opt.speed);
                    visible = false;
                };
            var doShow = function() {
                    $(slider).animate({
                        height: sliderHeight,
                    }, opt.speed);
                    visible = true;
                };
            $(slider).css({
                position: 'fixed',
                width: '100%',
                bottom: '0',
                height: sliderHeight,
                textAlign: 'center',
                backgroundColor: opt.backgroundColor,
                opacity: opt.opaci,
                zIndex: 1000
            });
            $(header).css({
                width: '100%',
                margin: '0',
                textAlign: 'center',
                height: opt.headerSize,
                opacity: opt.opaci,
                zIndex: 1000
            });
            $(bottomBar).css({
                position: 'relative',
                width: '100%',
                bottom: '0',
                height: opt.headerSize,
                backgroundColor: 'blue',
                opacity: 0
            });



            header.addEventListener('click', function(event) {
                if(visible) {
                    doHide();
                } else {

                    $(slider).append(opt.content[event.target.innerHTML]);
                    opt.content[event.target.innerHTML].show();

                    doShow();
                }
            });
            $(header).append(generateHeaderContent(opt.content));
            $(slider).append(header);
            $('body').append(slider, bottomBar);
            doHide();
            return {
                hide: doHide,
                show: doShow
            };
        };

    return create;
});