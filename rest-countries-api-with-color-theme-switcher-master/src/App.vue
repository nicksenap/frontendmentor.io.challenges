<template>
  <nav-bar />
  <card-container :countryDatas="countryData" />
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useStore } from 'vuex';
  import NavBar from './components/molecules/NavBar.vue';
  import CardContainer from './components/organisms/CardContainer.vue';
  import { Country } from './types/country.interface';

  export default defineComponent({
    name: 'App',
    setup() {
      const store = useStore();
      store.dispatch('fetchAllCountries');
      const countryDatas = reactive<Array<Country>>(store.state.countries.slice(0, 100));
      return { store, countryDatas };
    },
    components: {
      NavBar,
      CardContainer
    },
    methods: {
      getCountriesByRegion(Region: string) {
        this.countryDatas = this.store.state.countries.filter(
          (country: Country) => country.region == Region
        );
      }
    }
  });
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
  html body {
    margin: 0px;
    font-family: 'Nunito Sans', sans-serif;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }
</style>
