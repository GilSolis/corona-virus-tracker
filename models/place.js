module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Place", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
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


        },
        optionText: {
            type: DataTypes.TEXT,
        },
        optionLink: {
            type: DataTypes.TEXT,
        },
        text: {
            type: DataTypes.TEXT,
        }
    });

    return Post;
};