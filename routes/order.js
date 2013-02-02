var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/burgers');
var Ingredient = mongoose.model('Ingredient');
var Order = mongoose.model('Order');

exports.new = function(req, res){
  console.log("loaded");
  Order.find({}, function(err, orders) {
        if (err) console.log(err); // ...
        Ingredient.find({}, function(err, ingredients) {
          if (err) console.log(err); // ...
          res.render('order', {title:"Order List",orders:orders, ingredients:ingredients});
        })
    })
};

exports.new_post = function(req, res){
  console.log("posted");
  Order.remove({_id: req.body._id}, function(err) {
            if (err) console.log(err); // ...
            res.send("Order complete!");
        });
};