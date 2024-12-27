const Location = require('../models/Location');



class LocationRepository {
    async create(locationData) {
      const location = new Location(locationData);
      return await location.save();
    }
  
    async findAll() {
      return await Location.find();
    }
  
    async findById(id) {
      return await Location.findById(id);
    }
  
    async update(id, updateData) {
      return await Location.findByIdAndUpdate(id, updateData, { new: true });
    }
  
    async delete(id) {
      return await Location.findByIdAndDelete(id);
    }
  
    async findNearby(lat, lng) {
      return await Location.find({
        location: {
          $near: {
            $geometry: { type: 'Point', coordinates: [lng, lat] },
            $maxDistance: 10000,  // 10 km radius
          },
        },
      });
    }
  
    async search(query) {
      return await Location.find({
        $text: { $search: query },
      });
    }
  }
  
  module.exports = new LocationRepository();