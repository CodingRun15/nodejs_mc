
const mongoose = require('mongoose');
const ProductModel = mongoose.model('products',{
    name: {type: String, required: true},
    price: {type: Number, required: true,default:0},
    category: {type: String, required: true},
    quantity: {type: Number, required: true, default:0},
})

module.exports = ProductModel;