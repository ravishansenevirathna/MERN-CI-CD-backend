const express = require('express');
const locationController = require('./controllers/LocationController');
const userController = require('./controllers/UserController');
const jwtMiddleware = require('./utils/authMiddleware');


const router = express.Router();

router.post('/locations', jwtMiddleware,locationController.createLocation);
router.get('/locations', jwtMiddleware,locationController.getAllLocations);
router.get('/locations/:id', jwtMiddleware,locationController.getLocationById);
router.put('/locations/:id', jwtMiddleware,locationController.updateLocation);
router.delete('/locations/:id', jwtMiddleware,locationController.deleteLocation);
router.get('/locations/nearby', jwtMiddleware,locationController.findNearbyLocations);
router.get('/locations/search', jwtMiddleware,locationController.searchLocations);

router.post('/signIn', userController.signIn);
router.post('/login', userController.signIn);

module.exports = router;