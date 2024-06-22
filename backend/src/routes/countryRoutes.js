const express = require('express');
const router = express.Router();
const countries = require('../data/countries');

// Validação dos dados de entrada
const validateCountry = (country) => {
  const { name, isoCode, continent, population, createdAt } = country;
  if (!name || !isoCode || !continent || !population || !createdAt) {
    return false;
  }
  if (typeof name !== 'string' || name.trim() === '') return false;
  if (typeof isoCode !== 'string' || isoCode.trim() === '') return false;
  if (typeof continent !== 'string' || continent.trim() === '') return false;
  if (typeof population !== 'number' || population < 10000) return false;
  if (!Date.parse(createdAt)) return false;
  return true;
};

// Listar todos os países
router.get('/', (req, res) => {
  const countryList = countries.map(({ name, isoCode }) => ({ name, isoCode }));
  res.json(countryList);
});

// Detalhes de um país
router.get('/:isoCode', (req, res) => {
  const country = countries.find(c => c.isoCode === req.params.isoCode);
  if (country) {
    res.json(country);
  } else {
    res.status(404).send('País não encontrado');
  }
});

// Adicionar um novo país
router.post('/', (req, res) => {
  const newCountry = req.body;
  if (!validateCountry(newCountry)) {
    return res.status(400).send('Dados inválidos');
  }
  countries.push(newCountry);
  res.status(201).json(newCountry);
});

module.exports = router;
