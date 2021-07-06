<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Teste />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
