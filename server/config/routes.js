var crypto = require('crypto')

module.exports = function (app, db, emailService, passport) {
    var checkUser = passport.authenticate('local')

    var ensureAuthenticated = function (req, res, next) {
        if (req.isAuthenticated()) { return next(); }
        next(new Error('No authenticated'));
    }

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('/privat/cabinet', ensureAuthenticated, function (req, res) {
        res.render('../../public/app/cabinet/cabinet');
    });

    app.route('/api/backCall').post(function (req, res) {
        emailService.sendEmail('Человек по имени ' + req.body.name + ' с телефоном: ' + req.body.phoneNumber + ' и email адресом: ' + req.body.email +  ' хочет зарегистрировать компанию. ', 'Обратный звонок');
        res.json({success: true});
    });

    app.route('/api/sendGuide').post(function (req, res) {
		//todo change it
        //emailService.sendEmail('Перезвоните человеку по имени ' + req.body.name + ', на номер: ' + req.body.phoneNumber + '. ', 'Обратный звонок');
        res.json({success: true});
    });

    app.get('/api/login', function (req, res) {
        if (req.user)
            res.send(req.user)
        else
            res.send(401)
    })

    app.post('/api/login', checkUser, function (req, res) {
        var username = req.body.login

        db.User.findOne({where: {login: username}}).then(function(user) {
            var token = crypto.randomBytes(32).toString('hex');

            user.set('token', token).save().then(function() {
                res.cookie('token', user.get('token'), {
                    expires: new Date(Date.now() + 2 * 604800000),
                    path: '/'
                });

                res.send(user)
            })
        })
    });

    app.post('/api/registration', function (req, res) {
        var username = req.body.login
        var password = req.body.password

        db.User.createUser(username, password, 'user').then(function(user) {
            res.send(user)
        }).catch(function(error) {
            res.send(400, error)
        })
    });


    app.get('*', function (req, res) {
        res.render('index');
    });
};