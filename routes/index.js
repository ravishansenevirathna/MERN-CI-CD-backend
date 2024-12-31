const express = require('express');
const locationRoutes = require('./locationRoutes');
const hotelRoutes = require('./hotelRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/locations', locationRoutes);
router.use('/hotels', hotelRoutes);
router.use('/users', userRoutes);

module.exports = router;