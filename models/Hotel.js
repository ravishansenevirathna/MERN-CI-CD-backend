const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, default: 0 },
  price: { type: Number, required: true },
  description: { type: String },
  qrCode: { type: String },

});

module.exports = mongoose.model('Hotel', HotelSchema);