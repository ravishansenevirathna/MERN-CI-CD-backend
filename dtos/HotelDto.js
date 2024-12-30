class HotelDto {
    constructor(hotel) {
      this.id = hotel._id;
      this.name = hotel.name;
      this.location = hotel.location;
      this.rating = hotel.rating;
      this.price = hotel.price;
      this.description = hotel.description;
      this.qrCode = hotel.qrCode;
    }
  }
  
  module.exports = HotelDto;