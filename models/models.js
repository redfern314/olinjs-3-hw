var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');

var ingredientSchema = mongoose.Schema(
    {name: String,
      cost: Number
      }
);

var orderSchema = mongoose.Schema(
    {name: String,
      ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]
      }
);

mongoose.model('Ingredient', ingredientSchema);
mongoose.model('Order', orderSchema);