/**
 * https://expressjs.com/en/4x/api.html
 */
var express = require('express');

/**
 * https://github.com/expressjs/morgan
 */
var morgan = require('morgan');

/**
 * https://nodejs.org/docs/latest/api/path.html
 */
var path = require('path');

var app = express();

var config = require('./package.json').config;

// Controller imports
var TestController = require('./controllers/TestController');
var SecondController = require('./controllers/SecondController');

// Others
var cu = require('./helpers/ConsoleUtil');

// Attaching middlewares to the app
app.use(morgan('tiny'));
app.use('/', TestController);
app.use('/second', SecondController);

// Start the server
app.listen(config.port, function () {
    cu.l('Server is listening on ' + config.port);
});