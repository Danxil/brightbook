module.exports = function(config) {
    var fs = require("fs");
    var path = require("path");
    var Sequelize = require("sequelize");

    if (config.dbUrl)
        var sequelize = new Sequelize(config.dbUrl)
    else
        var sequelize = new Sequelize(config.db, config.dbUser, config.dbPass, {
            host: config.dbHost,
            dialect: 'mysql',
            define: {
                timestamps: false,
            }
        })

    return {
        sequelize: sequelize,
        Sequelize: Sequelize
    }
}