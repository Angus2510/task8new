var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Car = require('../models/carSchema');

router.get('/api/cars', async function(req, res, next) {
  
  let result = await Car.find();
  res.json(result);
 
});


module.exports = router;
