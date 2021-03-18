import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import { Country, Region } from "../../types/country.interface";
import axios from "axios";
import _ from "lodash";

interface countryDataState {
  allCountryData: Country[];
  filteredCountryData: Country[];
  regions: Region[];
  selectedRegion: Region;
}

const initialState: countryDataState = {
  allCountryData: [],
  filteredCountryData: [],
  regions: [],
  selectedRegion: Region.ALL,
};

export const countryDataSlice = createSlice({
  name: "countryData",
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.allCountryData = action.payload;
      state.filteredCountryData = action.payload;
    },
    filterCountries: (state, action: PayloadAction<string>) => {
      if (action.payload === Region.ALL) {
        state.filteredCountryData = state.allCountryData;
      } else {
        state.filteredCountryData = state.allCountryData.filter(
          (country) => country.region === action.payload
        );
      }
    },
    setRegions: (state) => {
      const rawRegion = state.allCountryData.map((country) => country.region);
      state.regions = _.uniq(rawRegion).filter((region) => region !== "");
      console.log(state.regions);
    },
  },
});

export const {
  setCountries,
  setRegions,
  filterCountries,
} = countryDataSlice.actions;
export const selectAllCountriesData = (state: RootState) =>
  state.countryData.allCountryData;
export const filteredCountryDataData = (state: RootState) =>
  state.countryData.filteredCountryData;
export const regionsData = (state: RootState) => state.countryData.regions;

export const fetchAllCountries = (): AppThunk => (dispatch) => {
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      dispatch(setCountries(response.data));
    })
    .then(() => dispatch(setRegions()));
};

export default countryDataSlice.reducer;
