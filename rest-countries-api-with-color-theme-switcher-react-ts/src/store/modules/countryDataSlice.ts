import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import { Country, Region } from "../../types/country.interface";
import axios from "axios";
import _ from "lodash";

interface countryDataState {
  allCountryData: Country[];
  filteredCountryData: Country[];
  selectedCountry: Country | undefined;
  regions: Region[];
  selectedRegion: Region;
  selectedCountryCode: string;
}

const initialState: countryDataState = {
  allCountryData: [],
  filteredCountryData: [],
  regions: [],
  selectedRegion: Region.ALL,
  selectedCountry: undefined,
  selectedCountryCode: "",
};

export const countryDataSlice = createSlice({
  name: "countryData",
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.allCountryData = action.payload;
      state.filteredCountryData = action.payload;
    },
    getCountryByCode: (state, action: PayloadAction<string>) => {
      const selectedCountry = state.allCountryData.find(
        (country) => country.alpha2Code === action.payload
      );
      state.selectedCountry = selectedCountry;
    },
    filterCountriesByRegion: (state, action: PayloadAction<Region>) => {
      if (action.payload === Region.ALL) {
        state.filteredCountryData = state.allCountryData;
      } else {
        state.filteredCountryData = state.allCountryData.filter(
          (country) => country.region === action.payload
        );
      }
    },
    filterCountriesByName: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        state.filteredCountryData = state.allCountryData;
      } else {
        state.filteredCountryData = state.allCountryData.filter((country) =>
          country.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    setRegions: (state) => {
      const rawRegion = state.allCountryData.map((country) => country.region);
      state.regions = _.uniq(rawRegion).filter((region) => region !== "");
    },
  },
});

export const {
  setCountries,
  setRegions,
  filterCountriesByRegion,
  filterCountriesByName,
  getCountryByCode,
} = countryDataSlice.actions;
export const selectAllCountriesData = (state: RootState) =>
  state.countryData.allCountryData;
export const filteredCountryDataData = (state: RootState) =>
  state.countryData.filteredCountryData;
export const regionsData = (state: RootState) => state.countryData.regions;
export const selectedCountryData = (state: RootState) =>
  state.countryData.selectedCountry;

export const fetchAllCountries = (): AppThunk => (dispatch) => {
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      dispatch(setCountries(response.data));
    })
    .then(() => dispatch(setRegions()))
    .then(() => {});
};

export default countryDataSlice.reducer;
