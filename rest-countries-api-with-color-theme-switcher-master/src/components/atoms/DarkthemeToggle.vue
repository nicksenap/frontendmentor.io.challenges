<template>
  <div class>
    <span class="darkThemeToggle" @click="toggle">
      <i class="far fa-moon"></i>
      <p>Dark Mode</p>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore();
    return { store }
  },
  computed:{
    ...mapState(['isDarkTheme'])
  },
  name: 'DarkthemeToggle',
  methods:{
    toggle(): void {
      this.store.dispatch('toggleDarkTheme')
    }
  }
});
</script>

<style lang="scss">
.darkThemeToggle {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 110px;
    cursor:pointer;

    &__darkTheme {
      color:white;
      background-color:rgb(108, 117, 126);
    }
}




</style>
