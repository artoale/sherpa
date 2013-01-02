/*global define, $*/
define(['trip'], function (trip) {
    'use strict';

    $(function () {
        var triplen,
            length = '';
        trip.load();
        triplen = trip.length;
        length += triplen + ' ';
        length += triplen > 1 ? 'days' : 'day';
        $('#destination').html(trip.destination);

        $('#length').html(length);
    });

    window.trip = trip;
    return 'Hello from mySher!';
});