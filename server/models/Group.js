module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Group', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        access: {
            type: DataTypes.INTEGER,
            unique: true
        }
    },
    {
        classMethods: {
            associate: function(models) {
                models.Group.hasMany(models.User, {as: 'User'})
            }
        }
    })
}