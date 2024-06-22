const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/countries', countryRoutes);

module.exports = app;
