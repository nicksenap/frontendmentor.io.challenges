<template>
  <div class="nav"> 
      <p> Where in the world? </p>
      <DarkthemeToggle />
    </div>
</template>

<script lang="ts">
import DarkthemeToggle from "../atoms/DarkthemeToggle.vue";
import { defineComponent } from 'vue';
export default defineComponent({
    components:{
        DarkthemeToggle
    }
})
</script>

<style>

</style>