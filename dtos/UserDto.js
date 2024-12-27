class UserDto {
    constructor(user) {
      this.id = user._id; 
      this.name = user.name; 
      this.email = user.email; 
      this.password = user.password; 
    }
  }
  
  module.exports = UserDto;