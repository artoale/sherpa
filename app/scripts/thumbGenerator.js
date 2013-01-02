/*global define*/
define([],function () {
    'use strict';
    var tpl = '<li class="span2">' +
                        '<div class="thumbnail">' +
                            '<img src="images/thumb/[[SRC]]" alt="">' +
                            '<p>[[CAPTION]]</p>' +
                        '</div>' +
                    '</li>';

    return function (imgUri, caption) {
        var newHtml = tpl.replace('[[SRC]]',imgUri);
        newHtml = newHtml.replace('[[CAPTION]]',caption);
        return newHtml;
    };
});