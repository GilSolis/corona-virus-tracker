module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Place", {
    name: {
      type: DataTypes.STRING,
      // VALIDATION IS NOT WORKING
      unique: true,
      validate: {
        len: [5, 500]
      }
    },
    titleLink: {
      type: DataTypes.TEXT

    },
    optionText: {
      type: DataTypes.TEXT

    },
    optionLink: {
      type: DataTypes.TEXT

    },
    text: {
      type: DataTypes.TEXT

    }

  });

  return Post;
};
