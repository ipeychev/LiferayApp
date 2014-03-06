'use strict';

var IndexModel = require('../models/index');

module.exports = function (app) {
    var model = new IndexModel();

    app.get('/', function (req, res) {
        var renderModel = {
            page: model,
            pjax: !!req.param('pjax')
        };

        res.render('index', renderModel);
    });

};
