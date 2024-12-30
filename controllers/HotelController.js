const hotelService = require('../services/HotelService');

class HotelController {
  async createHotel(req, res) {
    try {
      const hotel = await hotelService.createHotel(req.body);
      res.status(201).json(hotel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllHotels(req, res) {
    try {
      const hotels = await hotelService.getAllHotels();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getHotelById(req, res) {
    try {
      const hotel = await hotelService.getHotelById(req.params.id);
      res.status(200).json(hotel);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateHotel(req, res) {
    try {
      const hotel = await hotelService.updateHotel(req.params.id, req.body);
      res.status(200).json(hotel); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteHotel(req, res) {
    try {
      await hotelService.deleteHotel(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new HotelController();