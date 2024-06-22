import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CountryDetail = () => {
  const selectedCountryIsoCode = useSelector(state => state.countries.selectedCountry);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (selectedCountryIsoCode) {
      axios.get(`http://localhost:3000/api/countries/${selectedCountryIsoCode}`)
        .then(response => setCountry(response.data))
        .catch(error => console.error(error));
    }
  }, [selectedCountryIsoCode]);

  const detailStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  if (!country) return <h2 style={detailStyle}>Selecione um país para ver os detalhes</h2>;

  return (
    <div style={detailStyle}>
      <h2>Detalhes do País</h2>
      <p><strong>Nome:</strong> {country.name}</p>
      <p><strong>ISO Code:</strong> {country.isoCode}</p>
      <p><strong>Continente:</strong> {country.continent}</p>
      <p><strong>População:</strong> {country.population}</p>
      <p><strong>Data de Criação:</strong> {new Date(country.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default CountryDetail;
