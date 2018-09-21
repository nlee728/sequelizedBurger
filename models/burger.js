module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
  burger_name: Sequelize.STRING,
  devoured: {  
              type: Sequelize.BOOLEAN, 
              allowNull: false, 
              default: false 
            }
});
return Burger;
};