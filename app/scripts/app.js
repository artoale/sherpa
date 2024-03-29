/*global define, $*/
define(['trip'], function (trip) {
    'use strict';

    $(function () {
        trip.clear();
        var options = {
            format: 'dd/mm/yyyy',
            weekStart: 1
        };
        $('input[name="destination"]').val(trip.destination);
        
        $('#start').datepicker(options).on('changeDate', function (ev) {
            trip.startDate = ev.date;
            $(this).datepicker('setValue', trip.startDate);
        });

        $('#end').datepicker(options).on('changeDate', function (ev) {
            trip.endDate = ev.date;
            $(this).datepicker('setValue', trip.endDate);
        });

        $('#startPlanning').on('click', function () {
            trip.destination = $('input[name="destination"]').val();
            trip.save();
            window.location.href = 'specification.html';
        });
    });

    window.trip = trip;
    return 'Hello from Yeoman!';
});