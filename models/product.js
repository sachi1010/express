const mongoose = require('mongoose');

const userschema =new mongoose.Schema({
    pname:String,
    price:Number,
    quantity:Number,
    category:String
});

module.exports = mongoose.model('product',userschema);