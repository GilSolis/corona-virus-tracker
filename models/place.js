module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Place", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 250]
        }
      }
    },
    titleLink: {
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      }
    },
    optionText: {
      type: DataTypes.TEXT,
      len: [1]
    },
    optionLink: {
      type: DataTypes.TEXT,
      len: [1]
    },
    text: {
      type: DataTypes.TEXT,
      len: [1]
    }
  });

  return Post;
};
