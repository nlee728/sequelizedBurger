var Sequelize = require("sequelize");
var sequelize = require ("../config/connection.js");

//Create burger model to match database
var Burger = sequelize.define("burger", {
  burger_name: Sequelize.STRING,
  devoured: {  
              type: Sequelize.BOOLEAN, 
              allowNull: false, 
              default: false 
            }
});

//Sync with database
Burger.sync();

//Export Burger model
module.exports = Burger;