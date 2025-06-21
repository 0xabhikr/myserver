<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import './assets/style.css'
</script>

<!-- Remove scoped to apply globally -->
<style>
/* Set global font styles */
body {
  font-family: 'Oxanium', sans-serif;
  font-style: italic; /* Optional: remove if you don't want global italics */
  margin: 0;
  padding: 20px;
}
.t-menu__item {
  font-family: 'Oxanium', sans-serif;
  /* font-style: italic; */
  font-size: 20px;
}

</style>
