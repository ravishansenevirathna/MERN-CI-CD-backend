const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['beach', 'cultural', 'historical', 'mountain'], required: true },
  region: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  images: [{ type: String }],
  videos: [{ type: String }],
  tips: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  featured: { type: Boolean, default: false },
});

locationSchema.index({ location: '2dsphere' });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;