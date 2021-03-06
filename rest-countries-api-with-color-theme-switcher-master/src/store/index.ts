import { createStore } from 'vuex';
import Axios from 'axios';
import { Country } from '../types/country.interface';

export default createStore({
  state: {
    isDarkTheme: true,
    countries: []
  },
  mutations: {
    toggleDarkTheme(state): void {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setCountries(state, countries): void {
      state.countries = countries;
    }
  },
  actions: {
    toggleDarkTheme(): void {
      this.commit('toggleDarkTheme');
    },
    async fetchAllCountries(): Promise<void> {
      Axios.get('https://restcountries.eu/rest/v2/all').then(response => {
        this.commit('setCountries', response.data);
      });
    }
  },
  modules: {}
});
