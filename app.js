var express = require('express')
var logger = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const resourcesRouter = require('./routes/resources')

var app = express();

// app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(compression())

app.use('/api', resourcesRouter);


module.exports = app;
