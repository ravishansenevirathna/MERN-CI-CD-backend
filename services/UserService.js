const userRepository = require('../repositories/UserRepository');
const UserDto = require('../dtos/UserDto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfiguration = require('../utils/jwt');

class UserService {

    async signIn(data) {
      const userData = new UserDto(data);
      const user = await userRepository.create(userData);
      return new UserDto(user);
    }

    async login(data) {
        const { email, password } = data;

        const user = await userRepository.findByEmailOrUsername(email);

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            jwtConfiguration.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        };
    }
  
  }
  
  module.exports = new UserService();
