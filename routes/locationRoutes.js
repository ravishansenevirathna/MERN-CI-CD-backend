const express = require('express');
const locationController = require('../controllers/LocationController');
const jwtMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/', jwtMiddleware, locationController.createLocation);
router.get('/', jwtMiddleware, locationController.getAllLocations);
router.get('/:id', jwtMiddleware, locationController.getLocationById);
router.put('/:id', jwtMiddleware, locationController.updateLocation);
router.delete('/:id', jwtMiddleware, locationController.deleteLocation);
router.get('/nearby', jwtMiddleware, locationController.findNearbyLocations);
router.get('/search', jwtMiddleware, locationController.searchLocations);

module.exports = router;