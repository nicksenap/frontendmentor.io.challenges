<template>
  <div>
    <card v-for="" />
    <card :countryData="store.state.countries[0]" />
    <card :countryData="store.state.countries[1]" />
    <card :countryData="store.state.countries[2]" />
    <card :countryData="store.state.countries[3]" />
  </div>
</template>

<script lang="ts">
  import Card from '../molecules/Card.vue';
  import { defineComponent } from 'vue';
  import { mapState, useStore } from 'vuex';
  export default defineComponent({
    components: {
      Card
    },
    setup() {
      const store = useStore();
      return { store };
    },
    props: { countryData: { type: Object as Array<Country>, required: true } },
    computed: {
      ...mapState(['isDarkTheme'])
    }
  });
</script>

<style></style>
