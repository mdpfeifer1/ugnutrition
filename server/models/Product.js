const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  details: {
    type: String,
  },
  color: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: false
  }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
