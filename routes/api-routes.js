// Dependencies
var db = require("../models");

//console.log("Inside Api-Routes");

// Routes
module.exports = function(app) {

  // Get all burgers
  app.get("/", function(req, res) {

    // Finding all burgers, and then returning them to the user as JSON.
    db.Burger.findAll({}).then(function(results) {
      res.render("index", {burgers: results});
      //res.json({message: "Burgers loaded successfully"});
    }).catch(function(error) {
      console.log("There was an error when getting all burgers" + error);
    });

  });



  // Add a burger -------> THIS WORKS! DON'T CHANGE!
  app.post("/api/burgers", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    db.Burger.create({

      burger_name: req.body.burger_name,
      devoured: req.body.devoured
      
    }).then(function(results) {
      res.json({message: "Burger added successfully"});
    });
  });

  //Update burger to devoured
  app.put("/api/burgers/:id", function(req, res) {

    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(function(results) {
        res.json(results);
    });
});
};