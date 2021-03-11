<template>
  <div :class="[isDarkTheme ? 'nav--darkTheme' : '', 'nav']">
    <h2>Where in the world?</h2>
    <DarkthemeToggle />
  </div>
</template>

<script lang="ts">
  import DarkthemeToggle from '../atoms/DarkthemeToggle.vue';
  import { defineComponent } from 'vue';
  import { mapState, useStore } from 'vuex';
  export default defineComponent({
    setup() {
      const store = useStore();
      return { store };
    },
    components: {
      DarkthemeToggle
    },
    computed: {
      ...mapState(['isDarkTheme'])
    }
  });
</script>
