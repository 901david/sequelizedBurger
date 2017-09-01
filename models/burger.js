var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');
  var Burgers = sequelize.define("burgers", {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i']
      }
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });



// force: true will drop the table if it already exists
Burgers.sync({force: false}).then(() => {
  // Table created
  return Burgers.create({
    burger_name: 'Cheeseburger',
    devoured: false
  });
});
