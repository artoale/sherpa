/*global define*/
define(['jquery'], function ($) {
    'use strict';
    var template = '<div>[[CONTENT]]</div>';
    var forHumans = function (date) {
            var hours, minutes;
            hours = date.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }
            minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            return hours + ':' + minutes;
        };
        
    return function (event, element) {
        var content, removeButton = document.createElement('button'),
            closeButton = document.createElement('button'),
            image = document.createElement('img'),
            contentString = '';

        if (event.allDay) {
            contentString = 'All Day';
        } else {
            contentString = 'Schedule: ' + forHumans(event.start);
            if (event.end) {
                contentString += ' - ' + forHumans(event.end);
            }
        }

        image.src =  event.uri;
        $(image).addClass('popoverimg');

        content = $(template.replace('[[CONTENT]]', contentString)).append(image).append(removeButton).append(closeButton);
        $(removeButton).addClass('btn').addClass('btn-danger').html('Remove');
        $(closeButton).addClass('btn').addClass('pull-right').html('Close');
        removeButton.onclick = function () {
            // alert('merda');
            $(element).popover('hide');
            var found = false;
            $('#calendar').fullCalendar('removeEvents', function (eventObject) {
                if (!found && eventObject.id === event.id) {
                    var badge = event.nodeSrc.find('.badge');
                    var count = parseInt(badge.html(), 10) - 1;
                    found = true;
                    if (count > 0) {
                        badge.html(count);
                    } else {
                        badge.remove();
                    }
                    return true;
                }
                return false;
            });

        };
        closeButton.onclick = function () {
            $(element).popover('hide');
        };

        return content;
    };


});