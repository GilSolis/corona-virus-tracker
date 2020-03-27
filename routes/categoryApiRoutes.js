// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/categories", function(req, res) {
        db.Category.findAll({
                include: [db.Place]
            })
            .then(function(dbCategory) {
                res.json(dbCategory);
            })
    });


    app.get("/api/categories/:id", function(req, res) {
        db.Category.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Place]
        }).then(function(dbCategory) {
            res.json(dbCategory);
        })
    });

    app.post("/api/categories", function(req, res) {
        db.Category.create(req.body).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });

    app.delete("/api/categories/:id", function(req, res) {
        db.Category.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });

};