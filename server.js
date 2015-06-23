var q = require('vow')
var path = require('path');
global.appRoot = path.resolve(__dirname);

var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

var emailService = require('./server/apiServices/emailService')(config);

var db = require('./server/models')(config);

var bestAuth = require('best-auth')(db);
require('./server/config/routes')(app, emailService);

db.sequelize.sync().then(function () {
    function createGroup(name, access) {
        var def = q.defer()

        var group = db.Group.create({
            name: name,
            access: access
        }).then(function(group) {
            def.resolve(group)
        })

        return def.promise()
    }

    var proms = []
    proms.push(createGroup('admin', 1))
    proms.push(createGroup('user', 2))

    q.all(proms).then(function(results){
        var adminGroup = results[0]

        db.User.create({
            login: 'admin',
            password: '1'
        }).then(function(result) {
            adminGroup.setUser(result).then(function(){
                app.listen(config.port);
                console.log('Listening on port ' + config.port + '...');
            })
        })
    })
});
