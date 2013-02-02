var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/burgers');
var Ingredient = mongoose.model('Ingredient');
var Order = mongoose.model('Order');

exports.new = function(req, res){
  console.log("loaded?");
  Ingredient.find({}, function(err, docs) {
        if (err) console.log(err); // ...
        res.render('neworder', {title:"Add an Order",ingredients:docs});
    })
};

exports.new_post = function(req, res){
  console.log("posted");
  var neworder = new Order({ name: req.body.name, ingredients: req.body.ingredients});
    neworder.save(function (err) {
      if (err) console.log(err); // ...
      res.send("created new order");
    });
};