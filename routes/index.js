const express = require('express');
const router = express.Router();
const User =require('../models/user');
require('../models/db');

router.get('/',async (req, res)=>{
  try{
    const users = await User.find();
    res.render('index',{users});
  }
  catch(err){
    console.log(err);
    res.status(500).send('server error');
  }
})

module.exports = router;

