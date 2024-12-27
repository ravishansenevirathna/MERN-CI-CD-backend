const userRepository = require('../repositories/UserRepository');
const UserDto = require('../dtos/UserDto');

class UserService {
    async signIn(data) {
      const userData = new UserDto(data);
      const user = await userRepository.create(userData);
      return new UserDto(user);
    }
  
  }
  
  module.exports = new UserService();