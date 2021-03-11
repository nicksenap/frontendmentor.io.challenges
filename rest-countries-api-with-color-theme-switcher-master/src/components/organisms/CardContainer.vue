<template>
  <div :class="[isDarkTheme ? 'cardContainer--darkTheme' : '', 'cardContainer']">
    <card v-for="(countryData, index) in countryDatas" :countryData="countryData" :key="index" />
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
    props: { countryDatas: { type: Array, required: true } },
    computed: {
      ...mapState(['isDarkTheme'])
    }
  });
</script>

<style></style>
