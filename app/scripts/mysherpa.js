/*global define*/
define(['trip', 'jquery', 'thumbGenerator', 'fullcalendar'], function (trip, $, thumbGenerator) {
    'use strict';
    var thumbs = [{
        capt: 'Paris',
        uri: 'paris.jpeg'
    }, {
        capt: 'London',
        uri: 'london.jpeg'
    }, {
        capt: 'New York',
        uri: 'newyork.jpeg'
    }, {
        capt: 'Milano',
        uri: 'milano.jpeg'
    }];
    $(function () {
        var triplen, length = '',
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

                    // assign it the date that was reported
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;

                    // render the event on the calendar
                    // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                    // is the "remove after drop" checkbox checked?
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();


                }
            },
            thumbContainer = $('ul.thumbnails');
        trip.load();
        triplen = trip.length;
        length += triplen + ' ';
        length += triplen > 1 ? 'days' : 'day';
        $('#destination').html(trip.destination);

        $('#calendar').fullCalendar(options);
        $('#length').html(length);

        thumbs.forEach(function (thumb) {
            var eventObject = {
                title: thumb.capt,
                uri: thumb.uri
            };
            var node = $(thumbGenerator(thumb.uri, thumb.capt));
            // store the Event Object in the DOM element so we can get to it later
            node.data('eventObject', eventObject);
            thumbContainer.append(node);
        });
        thumbContainer.find('li').draggable({
            revert: 'invalid',
            revertDuration: 0
        });
    });

    window.trip = trip;
    return 'Hello from mySher!';
});