const express = require('express');
const locationController = require('./controllers/LocationController');
const userController = require('./controllers/UserController');

const router = express.Router();

router.post('/locations', locationController.createLocation);
router.get('/locations', locationController.getAllLocations);
router.get('/locations/:id', locationController.getLocationById);
router.put('/locations/:id', locationController.updateLocation);
router.delete('/locations/:id', locationController.deleteLocation);
router.get('/locations/nearby', locationController.findNearbyLocations);
router.get('/locations/search', locationController.searchLocations);

router.post('/signIn', userController.signIn);
router.post('/login', userController.signIn);

module.exports = router;