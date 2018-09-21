// Dependencies
var db = require("../models");

console.log("Inside Api-Routes");

// Routes
module.exports = function(app) {

  // Get all burgers
  app.get("/api/burgers", function(req, res) {

    // Finding all burgers, and then returning them to the user as JSON.
    db.burger.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  console.log("After app.get");

  // Add a burger
  app.post("/api/burgers", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    db.burger.create({

      burger_name: req.body.burger_name,
      devoured: req.body.devoured
      
    }).then(function(results) {
      res.json({message: "Burger added successfully"});
    });
  });
};
console.log("After app.post");