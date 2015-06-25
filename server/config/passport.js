var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    , crypto = require('crypto')

module.exports = function (app, db) {
    passport.serializeUser(function(user, next) {
        next(null, user.get('id'));
    });

    passport.deserializeUser(function(id, next) {
        db.User.findOne({where: {id: id}}).then(function(user) {
            next(false, user);
        });
    });

    passport.use(new LocalStrategy({
            usernameField: 'login',
            passwordField: 'password',
        }, function(username, password, done) {
            process.nextTick(function () {
                db.User.findOne({where: {login: username}}).then(function(user) {
                    console.log(1)
                    if (!user) { return done(null, false, JSON.stringify({ message: 'Unknown user ' + username })); }

                    if (!user.authorisation(password))
                        return done(null, false, JSON.stringify({ message: 'Invalid password' }));

                    return done(null, false)
                })
            });
        }
    ));

    app.use(passport.initialize());
    app.use(passport.session());

    return passport
};
