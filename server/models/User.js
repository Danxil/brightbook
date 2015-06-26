var crypto = require('crypto');
var vow = require('vow');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        login: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            set: function(pass) {
                this.salt = this.makeSalt()
                this.setDataValue('password', this.encryptPass(pass))
            }
        },
        token: {
            type: DataTypes.STRING,
        },
        salt: {
            type: DataTypes.STRING,
        },
    },
    {
        classMethods: {
            createUser: function(login, password, group) {
                var def = vow.defer()

                this.create({
                    login: login,
                    password: password
                }).then(function(user) {
                    sequelize.models.Group.findOne({where: {name: group}}).then(function(group) {
                        group.setUser(user)
                        def.resolve(user)
                    })
                }, function(error) {
                    def.reject(error)
                })

                return def.promise()
            }
        },
        instanceMethods: {
            getEncryptPass: function() {
                return this.encryptPass(this.password)
            },
            authorisation: function(pass) {
                return this.encryptPass(pass) === this.password;
            },
            encryptPass: function(pass) {
                return crypto.createHmac('sha1', this.salt).update(pass).digest('hex');
            },
            makeSalt: function() {
                return Math.round((new Date().valueOf() * Math.random())) + '';
            },
            getGroup: function(user) {
                return sequelize.models.Group.findOne({where: {id: this.GroupId}})
            }
        }
    })

    return User
}