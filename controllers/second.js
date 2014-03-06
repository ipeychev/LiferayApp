'use strict';

var SecondModel = require('../models/second');

module.exports = function (app) {
    var model = new SecondModel();

    app.get('/second', function (req, res) {
        model.pjax = !!req.query.pjax;

        res.render('second', model);
    });

};
