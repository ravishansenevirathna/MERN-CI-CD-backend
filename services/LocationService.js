const locationRepository = require('../repositories/LocationRepository');
const LocationDTO = require('../dtos/LocationDTO');
const LocationCreateDTO = require('../dtos/LocationCreateDTO');

class LocationService {
  async createLocation(data) {
    const locationData = new LocationCreateDTO(data);
    const location = await locationRepository.create(locationData);
    return new LocationDTO(location);
  }

  async getAllLocations() {
    const locations = await locationRepository.findAll();
    return locations.map(location => new LocationDTO(location));
  }

  async getLocationById(id) {
    const location = await locationRepository.findById(id);
    if (!location) throw new Error('Location not found');
    return new LocationDTO(location);
  }

  async updateLocation(id, data) {
    const location = await locationRepository.update(id, data);
    if (!location) throw new Error('Location not found');
    return new LocationDTO(location);
  }

  async deleteLocation(id) {
    const location = await locationRepository.delete(id);
    if (!location) throw new Error('Location not found');
    return new LocationDTO(location);
  }

  async findNearbyLocations(lat, lng) {
    const locations = await locationRepository.findNearby(lat, lng);
    return locations.map(location => new LocationDTO(location));
  }

  async searchLocations(query) {
    const locations = await locationRepository.search(query);
    return locations.map(location => new LocationDTO(location));
  }
}

module.exports = new LocationService();