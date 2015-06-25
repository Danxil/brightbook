var should = require('should')

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('../server/config/config')[env]
var dbEmpty = require('../server/config/db')(config)
var db = require('best-auth/models')(dbEmpty)
db = require('../server/models')(dbEmpty)


describe('models', function(){
    var admin
    before(function(done) {
        db.sequelize.sync().then(function () {
            db.User.findOne({where: {login: 'admin'}}).then(function(model) {
                admin = model
                done()
            })
        })
    })

    it('can be authorisated', function(done){
        admin.authorisation('1') && !admin.authorisation('2') ? done() : done('error')
    })

})