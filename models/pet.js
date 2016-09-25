var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  species: String,
  age: Number,
  image: String,
  created_at: Date
});

// pets is the name of the collection in the database
var Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
