<template>
  <nav-bar />
  <card :countryData="store.state.countries[0]" />
  <card :countryData="store.state.countries[1]" />
  <card :countryData="store.state.countries[2]" />
  <card :countryData="store.state.countries[3]" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import NavBar from './components/molecules/NavBar.vue';
  import Card from './components/molecules/Card.vue';

  export default defineComponent({
    name: 'App',
    setup() {
      const store = useStore();
      return { store };
    },
    components: {
      NavBar,
      Card
    },
    created() {
      this.store.dispatch('fetchAllCountries');
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
