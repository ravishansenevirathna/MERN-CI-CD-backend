const express = require('express');
const hotelController = require('../controllers/HotelController');
const jwtMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/save', jwtMiddleware, hotelController.createHotel);
router.get('/getAll', jwtMiddleware, hotelController.getAllHotels);
router.get('/:id', jwtMiddleware, hotelController.getHotelById);
router.put('/:id', jwtMiddleware, hotelController.updateHotel);
router.delete('/:id', jwtMiddleware, hotelController.deleteHotel);

module.exports = router;