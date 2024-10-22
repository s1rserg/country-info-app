const countryService = require('../services/country.service');

const getAvailableCountries = async (req, res) => {
  try {
    const countries = await countryService.getAvailableCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({
      error: 'Error fetching available countries',
      message: error.message,
    });
  }
};

const getCountryInfo = async (req, res) => {
  const countryCode = req.params.code;

  try {
    const countryInfo = await countryService.getCountryInfo(countryCode);
    res.status(200).json(countryInfo);
  } catch (error) {
    res.status(500).json({
      error: 'Error fetching country information',
      message: error.message,
    });
  }
};

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
