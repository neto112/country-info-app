import { configureStore, createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    list: [],
    selectedCountry: null,
  },
  reducers: {
    setCountries(state, action) {
      state.list = action.payload;
    },
    addCountry(state, action) {
      state.list.push(action.payload);
    },
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setCountries, addCountry, setSelectedCountry } = countriesSlice.actions;

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
  },
});

export default store;
