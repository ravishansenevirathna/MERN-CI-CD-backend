const User = require('../models/User');

class UserRepository {
    async create(userData) {
      const user = new User(userData);
      return await user.save();
    }

    async findByEmailOrUsername(identifier) {
        return await User.findOne({
          $or: [{ email: identifier }, { name: identifier }],
        });
      }
  
  }
  
  module.exports = new UserRepository();