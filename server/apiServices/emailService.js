var mailer = require("mailer");

module.exports = function (config) {
    return {
        sendEmail: function (text, subject) {
            mailer.send({
                host: config.emailHost,
                port: config.emailPort,
                to: config.managerEmail,
                from: config.fromEmail,
                subject: subject,
                authentication: "login",
                username: config.smtpUser,
                password: config.smtpPassword,
                html: text
            }, function () {
                
            });
        }
    }
};