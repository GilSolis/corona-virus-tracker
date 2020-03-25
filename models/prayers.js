module.exports = function(sequelize, DataTypes) {
  let Prayer = sequelize.define("Prayer", {
    Name: DataTypes.STRING,
    Location: DataTypes.STRING,
    Thoughts: DataTypes.STRING
  });

  return Prayer;
};
