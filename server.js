var q = require('vow')
var path = require('path');
global.appRoot = path.resolve(__dirname);

var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
var db = require('./server/config/db')(config);
db = require('./server/models')(db);

var passport = require('./server/config/passport')(app, db);

var emailService = require('./server/apiServices/emailService')(config);

require('./server/config/routes')(app, db, emailService, passport);

db.sequelize.sync().then(function () {
    function createGroup(name, access) {
        var def = q.defer()


        var group = db.Group.findOrCreate({where: {
            name: name,
            access: access
        }}).then(function(group) {
            def.resolve(group[0])
        })

        return def.promise()
    }

    var proms = []
    proms.push(createGroup('admin', 1))
    proms.push(createGroup('user', 2))

    q.all(proms).then(function(results){
        var adminGroup = results[0]

        db.User.findOne({where: {
            login: 'admin@admin.com'
        }}).then(function(user) {
            fn = function(user) {
                adminGroup.setUser(user).then(function(){
                    app.listen(config.port);
                    console.log('Listening on port ' + config.port + '...');
                    console.log('Node enviroment: ' + env)
                })
            }

            if (user)
                return fn(user)
            
            db.User.create({
                login: 'admin@admin.com',
                password: '1'
            }).then(function(user) {
                fn(user)
            })
        })
    })
});