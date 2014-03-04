;(function() {
    'use strict';

    YUI({
        filter: 'raw',
        combine: false
    }).use('pjax-plugin', function (Y) {
        Y.one('.wrapper').plug(Y.Plugin.Pjax, {
            contentSelector: '.wrapper'
        });
    });

}());