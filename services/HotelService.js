const hotelRepository = require('../repositories/HotelRepository');
const HotelDto = require('../dtos/HotelDto');
const QRCode = require('qrcode');

class HotelService {
    async createHotel(hotelData) {
        
        const hotel = await hotelRepository.createHotel(hotelData);
    
        const qrCodeData = `${process.env.FRONTEND_URL}/hotels/${hotel._id}`;
        const qrCodeUrl = await QRCode.toDataURL(qrCodeData);
    
        hotel.qrCode = qrCodeUrl;
        await hotel.save();
    
        return new HotelDto(hotel);
      }
    

  async getAllHotels() {
    const hotels = await hotelRepository.getAllHotels();
    return hotels.map((hotel) => new HotelDto(hotel));
  }

  async getHotelById(id) {
    const hotel = await hotelRepository.getHotelById(id);
    if (!hotel) {
      throw new Error('Hotel not found');
    }
    return new HotelDto(hotel);
  }

  async updateHotel(id, hotelData) {
    const hotel = await hotelRepository.updateHotel(id, hotelData);
    return new HotelDto(hotel);
  }

  async deleteHotel(id) {
    await hotelRepository.deleteHotel(id);
  }
}

module.exports = new HotelService();