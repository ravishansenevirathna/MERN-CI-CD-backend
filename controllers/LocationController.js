const locationService = require('../services/LocationService');

class LocationController {
  async createLocation(req, res) {
    try {
      const location = await locationService.createLocation(req.body);
      res.status(201).json(location);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllLocations(req, res) {
    try {
      const locations = await locationService.getAllLocations();
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getLocationById(req, res) {
    try {
      const location = await locationService.getLocationById(req.params.id);
      res.status(200).json(location);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateLocation(req, res) {
    try {
      const location = await locationService.updateLocation(req.params.id, req.body);
      res.status(200).json(location);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteLocation(req, res) {
    try {
      await locationService.deleteLocation(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async findNearbyLocations(req, res) {
    try {
      const locations = await locationService.findNearbyLocations(req.query.lat, req.query.lng);
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async searchLocations(req, res) {
    try {
      const locations = await locationService.searchLocations(req.query.q);
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new LocationController();