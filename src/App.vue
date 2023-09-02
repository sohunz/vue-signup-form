<template>
  <HomePage class="homepage"/>
</template>

<script>
import HomePage from './components/HomePage.vue'
export default {
  components: {
    HomePage
  },
}
</script>

<style>
  html {
    margin: 0;
    background-color: #D3D3D3;
  }
  .homepage {
    max-width: 100vw;
    position: absolute;
    margin: auto;
  }

</style>


