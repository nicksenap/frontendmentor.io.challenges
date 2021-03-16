import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import { Country } from "../../types/country.interface";
import axios from "axios";

interface countryDataState {
  allCountryData: Country[];
  filteredCountryData: Country[];
}

const initialState: countryDataState = {
  allCountryData: [],
  filteredCountryData: [],
};

export const countryDataSlice = createSlice({
  name: "countryData",
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.allCountryData = action.payload;
    },
    filterCountries: (state, action: PayloadAction<string>) => {
      state.filteredCountryData = state.allCountryData.filter(
        (country) => country.region === action.payload
      );
    },
  },
});

export const { setCountries } = countryDataSlice.actions;
export const selectAllCountriesData = (state: RootState) =>
  state.countryData.allCountryData;

export const fetchAllCountries = (): AppThunk => (dispatch) => {
  axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
    dispatch(setCountries(response.data));
  });
};

export default countryDataSlice.reducer;
