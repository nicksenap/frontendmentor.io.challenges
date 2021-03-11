<template>
  <div :class="[isDarkTheme ? 'card--darkTheme' : '', 'card']">
    <img :src="countryData.flag" />
    <div :class="[isDarkTheme ? 'card__desc--darkTheme' : '', 'card__desc']">
      <h2>{{ countryData.name }}</h2>
      <h3>Population: {{ countryData.population }}</h3>
      <h3>Region: {{ countryData.region }}</h3>
      <h3>Capital: {{ countryData.capital }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
  import { Country } from '@/types/country.interface';
  import { defineComponent, PropType } from 'vue';
  import { mapState, useStore } from 'vuex';
  export default defineComponent({
    setup() {
      const store = useStore();
      return { store };
    },
    computed: {
      ...mapState(['isDarkTheme'])
    },
    props: { countryData: { type: Object as PropType<Country>, required: true } }
  });
</script>

<style></style>
