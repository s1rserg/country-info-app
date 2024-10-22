const express = require('express');
const dotenv = require('dotenv');
const countryRoutes = require('./routes/country.route');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/countries/', countryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
