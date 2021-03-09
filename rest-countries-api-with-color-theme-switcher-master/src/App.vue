<template>
  <nav-bar/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DarkthemeToggle from './components/atoms/DarkthemeToggle.vue';
import NavBar from "./components/molecules/NavBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
