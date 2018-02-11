const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  }
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
