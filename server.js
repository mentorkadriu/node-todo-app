// This is the first file

var express = require('express'); // loads express package into project
var mongoose = require('mongoose'); // loads mongoose package into project
var path  = require('path'); // nodejs build-in package
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express(); // initialize express Object


// Configuration


// connect mongoose to mongodb and specify db which can be whatever you name it
mongoose.connect('mongodb://localhost/todoapp');

// Set view engine to jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// use /public directory to serve static files
app.use(express.static(__dirname + '/public'));

app.use(function (req,res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');

    next();
});


// Simple middleware to use some urls
app.use(function (req, res, next) {

    res.locals.baseUrl = req.baseUrl;

    res.locals.path = req.path;

    next();
});

app.use('/', routes);

// Start server
app.listen(3000); // I choosed port 3000 but you can change it