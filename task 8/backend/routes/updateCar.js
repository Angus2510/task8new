var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Car = require('../models/carSchema');

router.put('/updateOne/:id', async function(req, res, next) {

  const id = req.params.id;
  const registration = req.body.registration;
  const owner = req.body.owner;
  const colour = req.body.colour;
  const make = req.body.make;
  const model = req.body.model;
  const address = req.body.address;
  

  Car.findByIdAndUpdate(id, { make, model, registration, owner, colour, address })
    .then((response) => {
      res.send({ message: "Car updated", resultsFound: response.length, carObj: response });
    })
    .catch((err) => {
      res.send(err);
    });
  
});

module.exports = router;
