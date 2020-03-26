// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var db = require("../models");
var request = require('request')


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/places", function (req, res) {
    db.Place.findAll({}).then(function (dbPlace) {
      res.json(dbTodo);
    })
  });
  app.get("/api/corona", (req, res) => {
    console.log("at the route");
    const settings = {
      url: "https://coronavirus.app/get-places",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer rVWusM6YlhQYqoyBBywk85t1cGwkjs9T2DAJ2ToW53GgVLaa6KlbXy458rkvxx1v"
      }
    }
    request(settings, (err, response, body) => {
      if (err) throw new Error(err);
      const jsonBody = JSON.parse(body)
      res.status("200").send(jsonBody);
      //GET ALL US DATA
      //code
      //return us data
    })
  })
}
// Basic route that sends the user first to the AJAX Page
app.get("/viewdata", function(req, res) {
    res.sendFile(path.join(__dirname, "data.html"));
  });
  
  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
  });
  
  // Displays all characters
  app.get("/api/corona", function(req, res) {
    return res.json(characters);
  });
  
  // Displays a single character, or returns false
  app.get("/api/corona/table", function(req, res) {
    var chosen = req.params.newToday;
  
    console.log(chosen);
  
    
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/corona", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newToday = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newToday.routeName = newToday.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newToday);
  
    characters.push(newToday);
  
    res.json(newToday);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  