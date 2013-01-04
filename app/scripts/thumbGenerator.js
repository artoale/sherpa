/*global define*/
define([], function () {
    'use strict';
    var tpl = '<li class="span[[SIZE]]">' + '<div class="thumbnail">' + '<img src="[[SRC]]" alt="">' + '<p style="margin-top:3px"; class="caption"id="[[CAPTION_NAME]]" >[[CAPTION]][[BUTTON]]</p>' + '</div>' + '</li>';

    return function (imgUri, caption, spanSize, textButton, btnType) {
        var newHtml = tpl.replace('[[SRC]]', imgUri);
        if(textButton) {
            newHtml = newHtml.replace('[[BUTTON]]', '<span><a href="#" class="btn btn-mini [[BTN_TYPE]]" style="float: right">[[ACTION]]</a></span>');
        } else {
            newHtml = newHtml.replace('[[BUTTON]]', '');

        }
        newHtml = newHtml.replace('[[CAPTION]]', caption);
        newHtml = newHtml.replace('[[CAPTION_NAME]]', caption);
        newHtml = newHtml.replace('[[SIZE]]', spanSize || 2);
        newHtml = newHtml.replace('[[ACTION]]', textButton || ""), newHtml = newHtml.replace('[[BTN_TYPE]]', btnType || "");
        return newHtml;
    };
});