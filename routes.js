const express = require('express');
const locationController = require('./controllers/LocationController');
const userController = require('./controllers/UserController');
const jwtMiddleware = require('./utils/authMiddleware');
const hotelController = require('./controllers/HotelController');


const router = express.Router();

router.post('/locations', jwtMiddleware,locationController.createLocation);
router.get('/locations', jwtMiddleware,locationController.getAllLocations);
router.get('/locations/:id', jwtMiddleware,locationController.getLocationById);
router.put('/locations/:id', jwtMiddleware,locationController.updateLocation);
router.delete('/locations/:id', jwtMiddleware,locationController.deleteLocation);
router.get('/locations/nearby', jwtMiddleware,locationController.findNearbyLocations);
router.get('/locations/search', jwtMiddleware,locationController.searchLocations);

router.post('/hotel/save', jwtMiddleware,hotelController.createHotel);
router.get('/hotels/getAll', jwtMiddleware,hotelController.getAllHotels);
router.get('/hotels/:id', jwtMiddleware,hotelController.getHotelById);
router.put('/hotels/:id', jwtMiddleware,hotelController.updateHotel);
router.delete('/hotels/:id', jwtMiddleware,hotelController.deleteHotel);

router.post('/signIn', userController.signIn);
router.post('/login', userController.signIn);

module.exports = router;