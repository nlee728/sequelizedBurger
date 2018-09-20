// Dependencies
var Burger = require("../models/burger.js");

// Routes
module.exports = function(app) {

  // Get all burgers
  app.get("/api/all", function(req, res) {

    // Finding all burgers, and then returning them to the user as JSON.
    Burger.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // Add a burger
  app.post("/api/new", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    Burger.create({

      burger_name: req.body.burger_name,
      devoured: req.body.devoured
      
    }).then(function(results) {
      res.json({message: "Burger added successfully"});
    });
  });
};