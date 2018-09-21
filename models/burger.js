//console.log("Inside burger.js model");
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
  burger_name: DataTypes.STRING,
  devoured: {  
              type: DataTypes.BOOLEAN, 
              allowNull: false, 
              default: false 
            }
});
return Burger;
};