/*global define*/
define(['jquery'], function ($) {
    'use strict';


    var defaults = {
        column: ['Hotel', 'Restaurant', 'Shopping'],
        position: 'bottom',
        headerSize: '30px',
        contentSize: '110px',
        content: {},
        headerContent: ['pinco', 'pallo', 'pollo'],
        backgroundColorHeader: '#fff',
        backgroundColorBar: '#eee',
        opacity: 0.8,
        speed: 'fast'
    },

        opt;
    var generateHeaderContent = function (optcontent) {
            var content = document.createElement('div');
            var array = Object.keys(optcontent);
            array.forEach(function (element) {
                $(content).append($('<span class="span4" style : "opacity : 1"><div class="uparrow">&lsaquo;</div><div class="tooglable" style ="cursor:pointer">' + element + '</div></span>').css({
                    margin: ''
                }));
            });

            return content;
        };
    var generateCloseIcon = function () {
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
                'cursor': 'pointer'
            });
            return content;

        };
    var create = function (options) {
            opt = $.extend(true, {}, defaults, options);
            var sliderHeight = parseInt(opt.headerSize, 10) + parseInt(opt.contentSize, 10);
            var slider = document.createElement('div');
            var header = document.createElement('div');
            var content = document.createElement('div');
            var bottomBar = document.createElement('div');
            var visible = true;
            slider.id = "slider" ;
            content.id = "contentBar";
            $(header).addClass('row-fluid');
            var doHide = function () {
                    $(slider).animate({
                        height: opt.headerSize,
                        backgroundColor: "white",
                        opacity: opt.opacity
                    }, opt.speed);
                    visible = false;
                };
            var doShow = function () {
                    $(slider).animate({
                        height: sliderHeight,

                       
                    }, opt.speed,function(){

                        $(slider).css({
                        backgroundColor : opt.backgroundColorBar,
                        opacity: 1   
                        });
                    });
                    visible = true;
                };
            $(slider).css({
                position: 'fixed',
                width: '100%',
                bottom: '0',
                height: sliderHeight,
                textAlign: 'center',
                backgroundColor: "white",
                //background: 'rgba(F, F, F, 0.6)',
                opacity: opt.opacity,
                zIndex: 1000
            });
            $(header).css({
                width: '100%',
                margin: '0',
                textAlign: 'center',
                height: opt.headerSize,
                //opacity: 1,
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



            header.addEventListener('click', function (event) {
                if(visible) {

                    $(content).fadeOut('fast', function () {
                        $(opt.content).each(function(key,el){
                            opt.content[key] = $("#"+key);

                        });
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
                    $(opt.content).each(function(key,el){
                            opt.content[key] = $("#"+key);

                        });
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