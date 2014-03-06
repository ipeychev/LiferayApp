'use strict';

var SecondModel = require('../models/second');

module.exports = function (app) {
    var model = new SecondModel();

    app.get('/second', function (req, res) {
        var renderModel = {
            page: model,
            pjax: !!req.param('pjax')
        };

        res.render('second', renderModel);
    });

};
