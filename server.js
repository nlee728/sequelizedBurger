var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
var app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

//Syncing sequelize models and then starting Express app
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});