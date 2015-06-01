module.exports = function (app, emailService) {
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
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

    app.get('*', function (req, res) {
        res.render('index');
    });
};