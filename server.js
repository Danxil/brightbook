var path = require('path');
global.appRoot = path.resolve(__dirname);

var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

var emailService = require('./server/apiServices/emailService')(config);

require('./server/config/routes')(app, emailService);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');