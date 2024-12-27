const express = require('express');
const locationController = require('./controllers/LocationController');

const router = express.Router();

router.post('/locations', locationController.createLocation);
router.get('/locations', locationController.getAllLocations);
router.get('/locations/:id', locationController.getLocationById);
router.put('/locations/:id', locationController.updateLocation);
router.delete('/locations/:id', locationController.deleteLocation);
router.get('/locations/nearby', locationController.findNearbyLocations);
router.get('/locations/search', locationController.searchLocations);

module.exports = router;