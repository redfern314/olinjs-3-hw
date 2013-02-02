var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/burgers');
var Ingredient = mongoose.model('Ingredient');

exports.new = function(req, res){
  console.log("loaded");
  res.render("ingredient",{title:"Add an Ingredient"});
};

exports.new_post = function(req, res){
  console.log("posted");
  var newingredient = new Ingredient({ name: req.body.name, cost: req.body.cost});
    newingredient.save(function (err) {
      if (err) console.log(err); // ...
      res.send("created new ingredient");
    });
};