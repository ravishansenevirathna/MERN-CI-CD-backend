const userService = require('../services/UserService');

class UserController {
  async signIn(req, res) {
    try {
      const user = await userService.signIn(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.log("error");
      res.status(400).json({ error: error.message });
    }
  }

  async logIn(req, res) {
    try {
      const result = await userService.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

}

module.exports = new UserController();
