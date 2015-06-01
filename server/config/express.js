var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

module.exports = function (app, config) {
    function compileStylus(str, path){
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(session({secret: 'unicorn ate some bluegrass', saveUninitialized: true}));
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compileStylus
        }
    ));
    app.use(express.static(config.rootPath + '/public'));
};
