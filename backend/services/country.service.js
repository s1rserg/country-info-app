const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const getAvailableCountries = async () => {
  const response = await axios.get(
    `${process.env.NAGER_BASE_URL}/AvailableCountries`
  );
  return response.data;
};

const getCountryInfo = async countryCode => {
  const countryInfoResponse = await axios.get(
    `${process.env.NAGER_BASE_URL}/CountryInfo/${countryCode}`
  );
  const countryInfo = countryInfoResponse.data;
  const populationResponse = await axios.post(
    `${process.env.COUNTRIES_NOW_BASE_URL}/countries/population`,
    {
      country: countryInfo.commonName,
    }
  );

  const populationData = populationResponse.data.data.populationCounts;

  const flagResponse = await axios.post(
    `${process.env.COUNTRIES_NOW_BASE_URL}/countries/flag/images`,
    {
      country: countryInfo.commonName,
    }
  );
  const flagUrl = flagResponse.data.data.flag;

  return {
    name: countryInfo.commonName,
    borders: countryInfo.borders,
    populationData,
    flagUrl,
  };
};

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
