<<<<<<< HEAD
define([], function() {
  return 'Hello from Yeoman!';
    $.fn.carousel.defaults = {
    interval: Infinity,
    pause: 'hover'
  }
=======
/*global define, $*/
define(['trip'], function (trip) {
    'use strict';

    $(function () {
        trip.load();
        var options = {
            format: 'dd/mm/yyyy',
            weekStart: 1
        };
        $('input[name="destination"]').val(trip.destination);
        
        $('#start').datepicker(options).on('changeDate', function (ev) {
            trip.startDate = ev.date;
            $(this).datepicker('setValue', trip.startDate);
        }).datepicker('setValue', trip.startDate);

        $('#end').datepicker(options).on('changeDate', function (ev) {
            trip.endDate = ev.date;
            $(this).datepicker('setValue', trip.endDate);
        }).datepicker('setValue', trip.endDate);

        $('#startPlanning').on('click', function () {
            trip.destination = $('input[name="destination"]').val();
            trip.save();
            window.location.href = 'mysherpa.html';
        });
    });

    window.trip = trip;
    return 'Hello from Yeoman!';
>>>>>>> d990659b0d757e177b6b76ee0e8f6bbf3497474f
});