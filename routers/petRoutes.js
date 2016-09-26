var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var router = express.Router();

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

router.get('/sortA', function(req,res){
  console.log('/sortA route hit');
    Pet.find({}).sort({ name : 1}).exec( function(err, dbResults){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500); // Internal Server error
      } else {
        console.log('/sortA route returned:', dbResults);
        res.send(dbResults);
      }
    });
}); // end sortA

router.get('/sortD', function(req,res){
  console.log('/sortD route hit');
    Pet.find({}).sort({ name : -1}).exec( function(err, dbResults){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500); // Internal Server error
      } else {
        console.log('/sortD route returned:', dbResults);
        res.send(dbResults);
      }
    });
}); // end sortD

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
});

// delete assignment
router.delete('/delete', function(req, res){
  console.log('hit delete route with:',req.body);
  Pet.findByIdAndRemove({"_id":req.body.id}, function(){
    console.log("Pet "+ req.body.id +" has been deleted.");
    res.send(200);
  });// end callback
});// end delete

module.exports = router;
