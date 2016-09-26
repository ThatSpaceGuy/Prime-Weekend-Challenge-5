var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Set up middleware
app.use(bodyParser.urlencoded( {extended: false } ));
app.use(bodyParser.json());

//routers
var petRouter = require('../routers/petRoutes.js');
// use routes -- all routes in this router must start with /
app.use('/', petRouter);

// connection string
mongoose.connect('mongodb://localhost:27017/petDB');

// spin up server
app.listen('3000','localhost',function(){
  console.log('Server is listening on port 3000');
});

// base url hit
app.get('/', function(req,res){
  console.log('base url hit');

  console.log(path.resolve('public/views/index.html'));
  res.sendFile(path.resolve('public/views/index.html'));
});

// setup 'public' as a static resource
app.use(express.static('public'));
