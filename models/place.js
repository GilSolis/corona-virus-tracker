module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Place", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.TEXT,
        len: [1]
      },
      titleLink: {
        type: DataTypes.TEXT,
        len: [1]
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
  
    Post.associate = function(models) {
      Post.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
