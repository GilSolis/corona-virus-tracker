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

 
  app.get("/api/places", function(req, res) {
db.Place.findAll({}).then(function(dbPlace){
  res.json(dbTodo);
})
  });

// will be an error here until the frontend is ready

  // app.post("/api/places", function(req, res) {
  //   db.Place.create({
  //     name:req.body.name, //check once developed the frontedn with the form
  //     category:req.body.category // check with Ben if I need just one table or how to post to another table
  //     titleLink:req.body.titleLink,
  //     optionText:req.body.optionText,
  //     optionLink:req.body.optionLink,
  //     text:req.body.text
  //   }).then(function(dbPlace){
  //     res.json(dbPlace);
  //   })
  // });



  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/todos", function(req, res) {

  });
};
