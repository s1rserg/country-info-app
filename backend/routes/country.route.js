const express = require('express');
const countryController = require('../controllers/country.controller');

const router = express.Router();

router.get('/', countryController.getAvailableCountries);

router.get('/:code', countryController.getCountryInfo);

module.exports = router;
