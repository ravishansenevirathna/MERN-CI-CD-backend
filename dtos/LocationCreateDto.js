class LocationCreateDTO {
    constructor(location) {
      this.id = location._id;
      this.name = location.name;
      this.description = location.description;
      this.category = location.category;
      this.region = location.region;
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.images = location.images;
      this.videos = location.videos;
      this.tips = location.tips;
      this.rating = location.rating;
      this.featured = location.featured;
    }
  }
  
  module.exports = LocationCreateDTO;