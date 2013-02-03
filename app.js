
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');


var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI||'localhost');
//mongoose.connect(process.env.MONGOLAB_URI||'localhost');

// var models = require("./models/models");
// var ingredient = require("./routes/ingredient");
// var neworder = require("./routes/neworder");
// var order = require("./routes/order");

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
});
// app.get('/', order.home);
// app.get('/ingredient/new', ingredient.new);
// app.post('/ingredient/new', ingredient.new_post);
// app.get('/order/new', neworder.new);
// app.post('/order/new', neworder.new_post);
// app.get('/order', order.home);
// app.post('/order', order.home_post);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
