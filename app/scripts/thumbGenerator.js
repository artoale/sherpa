/*global define*/
define([],function () {
    'use strict';
    var tpl = '<li class="span[[SIZE]]">' +
                        '<div class="thumbnail">' +
                            '<img src="images/thumb/[[SRC]]" alt="">' +
                            '<p>[[CAPTION]]</p>' +
                        '</div>' +
                    '</li>';

    return function (imgUri, caption, spanSize) {
        var newHtml = tpl.replace('[[SRC]]',imgUri);
        newHtml = newHtml.replace('[[CAPTION]]',caption);
        newHtml = newHtml.replace('[[SIZE]]',spanSize || 2);
        return newHtml;
    };
});