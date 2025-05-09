const express = require('express');
const router = express.Router();
const Product = require('../models/product');
require('../models/db');

//get all products
router.get('/',async (req, res) =>{
    try{
        const products =await Product.find();
        res.render('product',{ products });
    }catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
});

//create product
router.post('/addproduct',async(req,res)=>{
    try{
        const{pname,price,quantity,category}=req.body;
        const newProduct = new Product({ pname, price, quantity, category });
        await newProduct.save();
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
});

//update product
router.post('/updatep/:id',async(req,res)=>{
    try{
        const { pname, price, quantity, category } = req.body;
        await Product.findByIdAndUpdate(req.params.id, { pname, price, quantity, category });
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
});

//delete product
router.get('/deletep/:id',async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
});


module.exports = router;