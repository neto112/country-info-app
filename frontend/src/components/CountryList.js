import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries, setSelectedCountry } from '../store';

const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.list);

  useEffect(() => {
    axios.get('http://localhost:3000/api/countries')
      .then(response => {
        dispatch(setCountries(response.data));
      })
      .catch(error => console.error(error));
  }, [dispatch]);

  const listItemStyle = {
    cursor: 'pointer',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div>
      <h1>Países</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {countries.map(country => (
          <li
            key={country.isoCode}
            onClick={() => dispatch(setSelectedCountry(country.isoCode))}
            style={listItemStyle}
          >
            {country.name} ({country.isoCode})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
