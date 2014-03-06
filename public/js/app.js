;(function() {
    'use strict';

    YUI().use('pjaxsteroids', function (Y) {
        new Y.PJAXSteroids({
            container: Y.config.doc,
            contentSelector: [
                {
                    selector: '.wrapper',
                    destNode: '.wrapper'
                },
                {
                    selector: '.navbar.navbar-default',
                    destNode: '.navbar.navbar-default'
                }
            ],
            linkSelector: 'a'
        });
    });

}());