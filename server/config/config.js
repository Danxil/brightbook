var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3030,
        smtpUser: 'eriendel97@gmail.com',
        smtpPassword: 'xqbF2y5c5KRokhpPTVLdIQ',
        emailHost: 'smtp.mandrillapp.com',
        emailPort: '587',
        fromEmail: 'eriendel97@gmail.com',
        managerEmail: 'umnick.jo@mail.ru',
        dbHost: 'localhost',
        db: 'brightbook',
        dbUser: 'root',
        dbPass: '1'
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 3030,
        smtpUser: 'eriendel97@gmail.com',
        smtpPassword: 'xqbF2y5c5KRokhpPTVLdIQ',
        emailHost: 'smtp.mandrillapp.com',
        emailPort: '587',
        fromEmail: 'eriendel97@gmail.com',
        managerEmail: 'artem@likefor.org',
        dbUrl: process.env.CLEARDB_DATABASE_URL
    }

};