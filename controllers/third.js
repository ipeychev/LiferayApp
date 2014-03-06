'use strict';

var ThirdModel = require('../models/third');

module.exports = function (app) {
    var model = new ThirdModel();

    app.get('/third', function (req, res) {
    	var renderModel = {
            page: model,
            pjax: !!req.param('pjax')
        };

        res.render('third', renderModel);
    });
};
