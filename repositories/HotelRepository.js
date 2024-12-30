const Hotel = require('../models/Hotel');

class HotelRepository {
  async createHotel(hotelData) {
    const hotel = new Hotel(hotelData);
    return await hotel.save();
  }

  async getAllHotels() {
    return await Hotel.find();
  }

  async getHotelById(id) {
    return await Hotel.findById(id);
  }

  async updateHotel(id, hotelData) {
    return await Hotel.findByIdAndUpdate(id, hotelData, { new: true });
  }

  async deleteHotel(id) {
    return await Hotel.findByIdAndDelete(id);
  }
}

module.exports = new HotelRepository();