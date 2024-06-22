import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCountry } from '../store';

const AddCountry = () => {
  const [name, setName] = useState('');
  const [isoCode, setIsoCode] = useState('');
  const [continent, setContinent] = useState('');
  const [population, setPopulation] = useState('');
  const [createdAt] = useState(new Date().toISOString());
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!isoCode.trim()) newErrors.isoCode = 'ISO Code é obrigatório';
    if (!continent.trim()) newErrors.continent = 'Continente é obrigatório';
    if (!population || parseFloat(population) < 10000) newErrors.population = 'População deve ser maior que 10.000';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const newCountry = { name, isoCode, continent, population: parseFloat(population), createdAt };

    axios.post('http://localhost:3000/api/countries', newCountry)
      .then(response => {
        setName('');
        setIsoCode('');
        setContinent('');
        setPopulation('');
        setErrors({});
        dispatch(addCountry(response.data));
      })
      .catch(error => console.error(error));
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginBottom: '10px',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Adicionar País</h2>
      Nome:
      <label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}
      </label>
      ISO Code:
      <label>
        <input type="text" value={isoCode} onChange={e => setIsoCode(e.target.value)} required style={inputStyle} />
        {errors.isoCode && <div style={errorStyle}>{errors.isoCode}</div>}
      </label>
      Continente:
      <label>
        <input type="text" value={continent} onChange={e => setContinent(e.target.value)} required style={inputStyle} />
        {errors.continent && <div style={errorStyle}>{errors.continent}</div>}
      </label>
      População:
      <label>
        <input type="number" value={population} onChange={e => setPopulation(e.target.value)} required style={inputStyle} />
        {errors.population && <div style={errorStyle}>{errors.population}</div>}
      </label>
      <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
        Adicionar
      </button>
    </form>
  );
};

export default AddCountry;