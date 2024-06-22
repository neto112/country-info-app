import React from 'react';
import AddCountry from './components/AddCountry';
import CountryDetail from './components/CountryDetail';
import CountryList from './components/CountryList';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', width: '75%', margin: 'auto', }}>
        <AddCountry />
        <div style={{ flex: 1, marginRight: '20px', margin: '0 3rem' }}>
          <CountryList />
        </div>
        <div style={{ flex: 2 }}>
          <CountryDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
