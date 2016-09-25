var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
//model
var Pet = require('../models/pet.js');

router.get('/all', function(req,res){
  console.log('/all route hit');
    Pet.find({}, function(err, dbResults){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500); // Internal Server error
      } else {
        console.log('/all route returned:', dbResults);
        res.send(dbResults);
      }
    });
});

router.post('/create', function(req, res){
  console.log('hit the /create post with:', req.body);

  var sentData = req.body;

  var newPet = new Pet({
    name: sentData.petName,
    species: sentData.petSpecies,
    age: sentData.petAge,
    image: sentData.petImage
  });

  newPet.save(function(err){
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500); // Internal Server error
    } else {
      console.log('New Pet saved successfully!');
      res.sendStatus(201); // Status created
    }
  });
  res.sendStatus(200);
});

module.exports = router;
