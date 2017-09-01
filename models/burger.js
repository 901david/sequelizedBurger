function(sequelize, DataTypes) {
  var Burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i']
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burgers;
};


// force: true will drop the table if it already exists
Burgers.sync({force: false}).then(() => {
  // Table created
  return Burgers.create({
    burger_name: 'Cheeseburger',
    devoured: false
  });
});
