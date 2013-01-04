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
            "friends": {
                value: $("#friends"),
                enumerable: true
            },
            "all": {
                value: $("#all"),
                enumerable: true
            },
            "deleted": {
                value: $("#deleted"),
                enumerable: true
            }
        });

        var slideroptions = {
            column: ['Hotel', 'Restaurant', 'Shopping'],
            position: 'bottom',
            headerSize: '40px',
            contentSize: '200px',
            content: mycontent,
            headerContent: ['restaurants', 'all', 'deleted'],
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
                        $('<span class="badge badge-info">1</span>').appendTo($(this).find('div'));
                    }
                    $(this).appendTo(thumbContainer);


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
        triplen = trip.length;
        length += triplen + ' ';
        length += triplen > 1 ? 'days' : 'day';

        $('#destination').html(trip.destination);
        $('#calendar').fullCalendar(options);
        $('#length').html(length);

        thumbs.forEach(function (thumb) {
            var node = $(thumbGenerator(thumb.uri, thumb.capt));
            var eventObject = {
                title: thumb.capt,
                uri: thumb.uri,
                nodeSrc: node
            };

            // store the Event Object in the DOM element so we can get to it later
            node.data('eventObject', eventObject);
            thumbContainer.append(node);
        });


        thumbs.forEach(function (thumb) {
            var node = $(thumbGenerator(thumb.uri, thumb.capt));
            var eventObject = {
                title: thumb.capt,
                uri: thumb.uri,
                nodeSrc: node
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


        var generateContentCarousel = function(){
            var container = $("#suggestion > .container"),
            ulRowfluid = document.createElement('ul');
            $(ulRowfluid).addClass("listPoiCar");
            $(ulRowfluid).addClass("unstyled");
            
            thumbs.forEach(function(thumb,index) {
             $(ulRowfluid).append(thumbGenerator(thumb.uri, thumb.capt ,2 , "remove" , "btn-danger"));
            });
            $(container).append(ulRowfluid);
        };
        var generateContentBar = function(selector,vettore){
            var container = $('#'+selector),
            ulRowfluid = document.createElement('ul');
            $(ulRowfluid).addClass("listPoiBar");
            $(ulRowfluid).addClass("unstyled");
            $(ulRowfluid).addClass("ulcontentBar");
            
            vettore.forEach(function(thumb,index) {
             $(ulRowfluid).append(thumbGenerator(thumb.uri, thumb.capt , 2 , "add" , "btn-success"));
            });
            $(container).append(ulRowfluid);
        };



        generateContentCarousel();
        generateContentBar("friends",friendsArray);
        generateContentBar("all",allArray)
        slider(slideroptions);
        addRemove(mycontent);


    });
    return 'Hello from mySher!';
});