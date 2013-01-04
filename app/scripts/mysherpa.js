/*global define*/
define(['trip', 'jquery', 'thumbGenerator', 'popoverContentGenerator', 'slider', 'addRemovePoi', 'fullcalendar', 'popover'], function (trip, $, thumbGenerator, contentGenerator, slider, addRemove) {
    'use strict';
    var thumbs = [{
        capt: 'Antibes',
        uri: 'images/antibes.jpg'
    }, {
        capt: 'Cannes',
        uri: 'images/cannes.jpg'
    }, {
        capt: 'Nice',
        uri: 'images/nice.jpg'
    }, {
        capt: 'Toulouse',
        uri: 'images/Toulouse.jpg'
    },{
        capt: 'Paris',
        uri: 'images/paris.jpeg'
    }, {
        capt: 'London',
        uri: 'images/thumb/london.jpeg'
    }, {
        capt: 'NewYork',
        uri: 'images/thumb/newyork.jpeg'
    }, {
        capt: 'Milano',
        uri: 'images/thumb/milano.jpeg'
    }];

       var friendsArray = [{
        capt: 'Baiju',
        uri: 'images/China_Bob/baiju.jpg'
    }, {
        capt: 'Beijing',
        uri: 'images/China_Bob/beijing.jpg'
    }, {
        capt: 'Brian',
        uri: 'images/China_Bob/brian.jpg'
    }, {
        capt: 'Chengdu',
        uri: 'images/China_Bob/chengdu.jpg'
    }, {
        capt: 'Shangai',
        uri: 'images/China_Bob/shanghai.jpg'
    }, {
        capt: 'Sheraton',
        uri: 'images/China_Bob/sheraton.jpg'
    }, {
        capt: 'Shinlu',
        uri: 'images/China_Bob/shinlu.jpg'
    }, {
        capt: 'Table',
        uri: 'images/China_Bob/table.jpg'
    }];

       var allArray = [{
        capt: 'Milan',
        uri: 'images/Italy_Alice/milan.jpg'
    }, {
        capt: 'Turin',
        uri: 'images/Italy_Alice/turin.jpg'
    }, {
        capt: 'Rho',
        uri: 'images/Italy_Alice/rho.jpg'
    }, {
        capt: 'Busto',
        uri: 'images/Italy_Alice/busto-arsizio.jpg'
    }, {
        capt: 'RhoGiangi',
        uri: 'images/Italy_Alice/dal_giangi_rho.jpg'
    }, {
        capt: 'Pisa',
        uri: 'images/Italy_Alice/hilton_milan.jpg'
    }, {
        capt: 'Chivasso',
        uri: 'images/Italy_Alice/windsor_turin.jpg'
    }, {
        capt: 'Centre',
        uri: 'images/Italy_Alice/montenapoleone_milan.jpg'
    }];


    $(function () {

        var mycontent = {};


        Object.defineProperties(mycontent, {
            friends: {
                value: $('#friends'),
                enumerable: true
            },
            all: {
                value: $('#all'),
                enumerable: true
            },
            deleted: {
                value: $('#deleted'),
                enumerable: true
            }
        });

        var slideroptions = {
            position: 'bottom',
            headerSize: '40px',
            contentSize: '200px',
            content: mycontent,
            speed: 'fast'
        };


        var triplen, length = '',
            counter = 0,
            options = {
                header: {
                    left: 'today prev,next',
                    center: 'title',
                    right: 'month,agendaWeek'
                },
                // locale
                firstDay: 1,
                editable: true,
                droppable: true,
                // this allows things to be dropped onto the calendar !!!
                drop: function (date, allDay) { // this function is called when something is dropped
                    // retrieve the dropped element's stored Event Object
                    var originalEventObject = $(this).data('eventObject');

                    // we need to copy it, so that multiple events don't have a reference to the same object
                    var copiedEventObject = $.extend({}, originalEventObject);
                    var badge;
                    // assign it the date that was reported
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;
                    copiedEventObject.id = counter;
                    counter += 1;

                    // render the event on the calendar
                    // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                    // remove the element from the "Draggable Events" list
                    badge = $(this).find('.badge');
                    if (badge.size()) {
                        badge.html(parseInt(badge.html(), 10) + 1);
                    } else {
                        $('<a class="badge badge-info" style="float: right">1</a>').appendTo($(this).find('p'));
                    }
                    if (copiedEventObject.category === 'poi') {
                        $(this).appendTo(thumbContainer);
                    } else {
                        $(this).appendTo($('#' + copiedEventObject.category).find('ul'));
                    }


                },
                eventAfterRender: function (event, element) {


                    $(element).popover({
                        title: event.title,
                        placement: 'right',
                        html: true,
                        content: function () {
                            return contentGenerator(event, element);
                        }
                    });
                }

            },

            thumbContainer = $('ul.thumbnails'),
            viewH = window.innerHeight;
        $('ul.thumbnails').css({
            height: viewH - 120,
            overflowY: 'scroll'
        });

        //fetch trip infos
        trip.load();
        triplen = trip.length || 15;
        length += triplen + ' ';
        length += triplen > 1 ? 'days' : 'day';
        trip.destination =  trip.destination || 'France';
        $('#destination').html(trip.destination);

        $('#length').html(length);



        var generateContentCarousel = function () {
                var container = $('#suggestion > .container'),
                    ulRowfluid = document.createElement('ul');
                $(ulRowfluid).addClass('listPoiCar');
                $(ulRowfluid).addClass('unstyled');

                thumbs.forEach(function (thumb) {
                    $(ulRowfluid).append(thumbGenerator(thumb.uri, thumb.capt, 2, 'remove', 'btn-danger'));
                });
                $(container).append(ulRowfluid);
            };
        var generateContentBar = function (selector, objectArray) {
                var container = $('#' + selector),
                    ulRowfluid = document.createElement('ul');
                $(ulRowfluid).addClass('listPoiBar');
                $(ulRowfluid).addClass('unstyled');
                var iterateOn = objectArray || thumbs;
                iterateOn.forEach(function (thumb) {
                    $(ulRowfluid).append(thumbGenerator(thumb.uri, thumb.capt, 2, 'add', 'btn-success'));
                });
                $(container).append(ulRowfluid);
            };
        var generateContentBarTwo = function (selector, category, objectArray) {
                var container = $('#' + selector),
                    ulRowfluid = document.createElement('ul');
                $(ulRowfluid).addClass('listPoiBar');
                $(ulRowfluid).addClass('unstyled');
                var iterateOn = objectArray || thumbs;
                iterateOn.forEach(function (thumb) {
                    var node = $(thumbGenerator(thumb.uri, thumb.capt, 2));
                    node.draggable({
                        revert: 'invalid',
                        revertDuration: 0,
                        helper: function () {
                            //generate a minithumb for drag&drop
                            var thumb = $(this).data('eventObject');
                            return $(thumbGenerator(thumb.uri, thumb.title, 1));
                        }
                    });
                    $(ulRowfluid).append(node);
                    var eventObject = {
                        title: thumb.capt,
                        uri: thumb.uri,
                        nodeSrc: node,
                        category: category //available: poi, restaurant, hotel, shopping
                    };

                    // store the Event Object in the DOM element so we can get to it later
                    node.data('eventObject', eventObject);
                    // thumbContainer.append(node);
                });

                $(container).append(ulRowfluid);
            };



        generateContentCarousel();

        generateContentBar("friends",friendsArray);
        generateContentBar("all",allArray)
        generateContentBarTwo('hotel', 'hotel');
        generateContentBarTwo('restaurant', 'restaurant');
        generateContentBarTwo('shopping', 'shopping');
        var sliderOne = slider(slideroptions);
        addRemove(sliderOne.state);

        var slideroptionsTwo = {
            position: 'bottom',
            headerSize: '40px',
            contentSize: '200px',
            content: {
                hotel: $('#hotel'),
                restaurant: $('#restaurant'),
                shopping: $('#shopping'),
            },
            speed: 'fast',
            visible: false
        };
        var sliderTwo = slider(slideroptionsTwo);
        $('a.right.carousel-control').click(function () {
            sliderOne.hideAll();
            sliderTwo.showAll();
            thumbContainer.empty();
            $('#calendar').fullCalendar(options);
            setTimeout(function () {
                $('.fc-button-agendaWeek').click();
            }, 800);
            var finalData = (function () {
                var objData = [];
                $('#suggestion').find('li').each(function () {
                    var newObj = {
                        uri: $(this).find('img').attr('src'),
                        capt: $(this).find('p').contents().filter(function () {
                            return (this.nodeType === 3);
                        }).text()
                    };
                    objData.push(newObj);
                });
                return objData;
            }());
            console.log(finalData);
            finalData.forEach(function (thumb) {
                var node = $(thumbGenerator(thumb.uri, thumb.capt));
                var eventObject = {
                    title: thumb.capt,
                    uri: thumb.uri,
                    nodeSrc: node,
                    category: 'poi' //available: poi, restaurant, hotel, shopping
                };

                // store the Event Object in the DOM element so we can get to it later
                node.data('eventObject', eventObject);
                thumbContainer.append(node);
            });
            thumbContainer.find('li').draggable({
                revert: 'invalid',
                revertDuration: 0,
                helper: function () {
                    //generate a minithumb for drag&drop
                    var thumb = $(this).data('eventObject');
                    return $(thumbGenerator(thumb.uri, thumb.title, 1));
                }
            });

        });
        $('a.left.carousel-control').click(function () {
            $('#calendar').fullCalendar('destroy');
            sliderOne.showAll();
            sliderTwo.hideAll();
        });

        


    });
    return 'Hello from mySher!';
});