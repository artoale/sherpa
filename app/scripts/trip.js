/*global define*/
define([], function () {
    'use strict';
    var startDate, endDate, trip = {},
        destination;

    /**
     * Getter e setter per data di inizio e fine
     */
    Object.defineProperties(trip, {
        'startDate': {
            get: function () {
                return startDate;
            },
            set: function (setValue) {
                if (typeof setValue === 'string') {
                    setValue = new Date(setValue);
                }
                if (endDate && endDate.valueOf() < setValue.valueOf()) {
                    startDate = endDate;
                    return;
                }
                startDate = setValue;
            }
        },
        'endDate': {
            get: function () {
                return endDate;
            },
            set: function (setValue) {
                if (typeof setValue === 'string') {
                    setValue = new Date(setValue);
                }
                if (startDate && startDate.valueOf() > setValue.valueOf()) {
                    endDate = startDate;
                    return;
                }
                endDate = setValue;
            }
        },
        'destination': {
            get: function () {
                return destination;
            },
            set: function (setValue) {
                destination = setValue && setValue.toString();
            }
        },
        'length': {
            get: function () {
                var dayMillis = 24 * 60 * 60 * 1000;
                if (!startDate || !endDate) {
                    return 0;
                }
                return (Math.ceil((endDate.getTime() - startDate.getTime()) / dayMillis));

            }
        }
    });

    trip.save = function () {
        sessionStorage.trip = JSON.stringify({
            startDate: startDate,
            endDate: endDate,
            destination: destination
        });
    };

    trip.load = function () {
        var oldTrip = JSON.parse(sessionStorage.trip);
        if (oldTrip) {
            trip.startDate = oldTrip.startDate;
            trip.endDate = oldTrip.endDate;
            trip.destination = oldTrip.destination;
        }
    };

    trip.clear = function () {
        sessionStorage.removeItem('trip');
    };

    return trip;
});