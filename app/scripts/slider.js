/*global define*/
define(['jquery'], function($) {
    'use strict';


    var defaults = {
        column: ['Hotel', 'Restaurant', 'Shopping'],
        position: 'bottom',
        headerSize: '30px',
        contentSize: '110px',
        content: {},
        headerContent: ['pinco', 'pallo', 'pollo'],
        backgroundColorHeader: '#fff',
        backgroundColorBar: '#ddd',
        opacity: 0.7,
        speed: 'fast'
    },

        opt;
    var generateHeaderContent = function(optcontent) {
            var content = document.createElement('div');
            var array = Object.keys(optcontent);
            array.forEach(function(element) {
            $(content).append($('<span class="span4"><div class="uparrow">&lsaquo;</div><div class="tooglable" style ="cursor:hand">' + element + '</div></span>').css({   
                             margin: ''
                }));
            });

            return content;
        };
    var generateCloseIcon = function() {
            var content = document.createElement('div');
            content.id = "closebar";

            content.innerHTML = '&lsaquo;';
            $(content).css({
                position: "absolute",
                top: '10px',
                right: '25px',
                'font-size': '40px',
                '-moz-transform': 'rotate(270deg)',
                '-webkit-transform': 'rotate(270deg)',
                'cursor':'hand'
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
                backgroundColor: opt.backgroundColorBar,
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

                    $(content).fadeOut('fast', function() {
                        $(content).empty();
                        if($(event.target).is("#closebar")) {
                            doHide();
                            $('#closebar').hide();
                        } else if($(event.target).hasClass("tooglable")) {
                            $(content).append(opt.content[event.target.innerHTML]);
                            $(slider).append($(content));
                            $(content).fadeIn("fast");
                            opt.content[event.target.innerHTML].show();
                            $('#closebar').show();
                        }
                    });
                } else {
                    if($(event.target).hasClass("tooglable")) {
                        $(content).append(opt.content[event.target.innerHTML]);
                        $(slider).append($(content));
                        $(content).show();
                        opt.content[event.target.innerHTML].show();
                        $('#closebar').show();
                        doShow();
                    }
                }
            });


            $(header).append(generateHeaderContent(opt.content), generateCloseIcon());
            $(slider).append(header);
            $('body').append(slider, bottomBar);
            doHide();
            $('#closebar').hide();

            return {
                hide: doHide,
                show: doShow
            };
        };

    return create;
});