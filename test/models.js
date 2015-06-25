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


    it('can be create new user', function(done){
        db.User.createUser('vasia', '1', 'user').then(function(vasia) {
            db.Group.findOne({where: {name: 'user'}}).then(function(group) {
                var success = vasia.authorisation('1') && !vasia.authorisation('2') && vasia.get('groupId') == group.get('groupId')
                vasia.destroy()

                success ? done() : done('error')
            })
        })
    })

    it('can be get user group', function(done){
        admin.getGroup().then(function(group) {
            db.Group.findOne({where: {id: admin.get('GroupId')}}).then(function(adminGroup) {
                var success = group.get('name') == adminGroup.get('name') && group.get('access') == adminGroup.get('access')
                success ? done() : done('error')
            })
        })
    })

    it('can be check group', function(done){
        var reqSessionAdmin = {
            login: 'admin',
            password: '1'
        }

        admin.getGroup().then(function(group) {
            db.Group.findOne({where: {id: admin.get('GroupId')}}).then(function(adminGroup) {
                var success = group.get('name') == adminGroup.get('name') && group.get('access') == adminGroup.get('access')
                success ? done() : done('error')
            })
        })
    })
})